//CODIGO DA PAGINA ACOMPANHAMENTOS
let escolhaSorvete = [];
let escolhaAcai = [];
let escolhaCobertura = [];
let escolhaFrutas = [];
let escolhaComplementos = [];


let indiceCobertura = sessionStorage.length;
let indiceFrutas = sessionStorage.length;
let indiceComplementos = sessionStorage.length;
let indiceAcai = sessionStorage.length;
let indiceSorvete = sessionStorage.length;


function concluirPedido() {
    const cobertura = document.getElementsByName('COBERTURA');
    escolhaCobertura = [];
    for (let i = 0; i < cobertura.length; i++) {
        if (cobertura[i].checked) {
            const escolha = {
                texto: cobertura[i].getAttribute('data-text'),
                valor: cobertura[i].value
            };
            escolhaCobertura.push(escolha);
        }
    }

    const frutas = document.getElementsByName('frutas');
    escolhaFrutas = [];
    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i].checked) {
            const escolha = {
                texto: frutas[i].getAttribute('data-text'),
                valor: frutas[i].value
            };
            escolhaFrutas.push(escolha);
        }
    }

    const complementos = document.getElementsByName('complementos');
    escolhaComplementos = [];
    for (let i = 0; i < complementos.length; i++) {
        if (complementos[i].checked) {
            const escolha = {
                texto: complementos[i].getAttribute('data-text'),
                valor: complementos[i].value
            };
            escolhaComplementos.push(escolha);
        }
    }

    const sorvete = document.getElementsByName('sorvetes');
    escolhaSorvete = [];
    for (let i = 0; i < sorvete.length; i++) {
        if (sorvete[i].checked) {
            const escolha = {
                texto: sorvete[i].getAttribute('data-text'),
                valor: sorvete[i].value
            };
            escolhaSorvete.push(escolha);
        }
    }

    const acai = document.getElementsByName('acai');
    escolhaAcai = [];
    for (let i = 0; i < acai.length; i++) {
        if (acai[i].checked) {
            const escolha = {
                texto: acai[i].getAttribute('data-text'),
                valor: acai[i].value
            };
            escolhaAcai.push(escolha);
        }
    }

    let OpcaoCobertura = `escolhaCobertura_${indiceCobertura}`;
    let OpcaoFruta = `escolhaFruta_${indiceFrutas}`;
    let OpcaoComplemento = `escolhaComplemento_${indiceComplementos}`;
    let OpcaoSorvete = `sorvete_${indiceSorvete}`;
    let OpcaoAcai = `acai_${indiceAcai}`;

    // Armazenar no sessionStorage
    sessionStorage.setItem(OpcaoCobertura, JSON.stringify(escolhaCobertura));
    sessionStorage.setItem(OpcaoFruta, JSON.stringify(escolhaFrutas));
    sessionStorage.setItem(OpcaoComplemento, JSON.stringify(escolhaComplementos));
    sessionStorage.setItem(OpcaoSorvete, JSON.stringify(escolhaSorvete));
    sessionStorage.setItem(OpcaoAcai, JSON.stringify(escolhaAcai));
}


const ValorDisplay1 = document.getElementById('displayInput1');
let value = parseInt(ValorDisplay1.value); // Move a declaração para fora dos eventos de clique

const somarBotao = () => {
    if (isNaN(value)) { //verifica se value não é um número.
        value = 1;
    } else {
        value++;
    }
    ValorDisplay1.value = value;
}
//BOTÃO MAIS
document.getElementById('botaoMAIS1').addEventListener('click', somarBotao);

const subtrairBotao = () => {
    if (value > 1) {
        value--;
    }
    ValorDisplay1.value = value;
}
//BOTÃO MENOS
document.getElementById('botaoMENOS1').addEventListener('click', subtrairBotao);


let indiceQuantidade = sessionStorage.length;
const Armazenar_Mais_Menos = () => {

    // Use o índice atual para criar chaves únicas no sessionStorage
    const QuantidadeProduto = `quantidadeProduto_${indiceQuantidade}`;
    // Armazene os novos itens no sessionStorage
    sessionStorage.setItem(QuantidadeProduto, parseInt(value));
}


//VALIDA SE A QUANTIDADE ESTÁ INSERIDA E DEPOIS ENVIA AO SESSIONSTORAGE
const validacoes = () => {
    if (ValorDisplay1.value === "" || ValorDisplay1.value == 0) {
        alert("Por favor, Informe a Quantidade!");
    } 
    else if (escolhaCobertura.length > 5) {
        alert("Por favor, escolha apenas 5 OPÇÕES de Cobertura");
        return false;
    } 
    else if (escolhaComplementos.length > 10 ) {
        alert("Por favor, escolha apenas 10 OPÇÕES de Complementos");
        return false;
    }
    //-----------------
    
    else if ( escolhaSorvete.length === 0) {
        alert("Por favor, escolha ao menos uma OPÇÃO de SORVETE.");
        return false;
    }
    else if (escolhaAcai.length === 0 ) {
        alert("Por favor, escolha ao menos uma OPÇÃO de AÇAI");
        return false;
    }
    else if (escolhaComplementos.length === 0) {
        alert("Por favor, escolha ao menos uma OPÇÃO de COMPLEMENTOS.");
        return false;
    }
    else if (escolhaFrutas.length === 0) {
        alert("Por favor, escolha ao menos uma OPÇÃO de FRUTAS.");
        return false;
    }
    else if (escolhaCobertura.length === 0) {
        alert("Por favor, escolha ao menos uma OPÇÃO de COBERTURA.");
        return false;
    }
   

    else {
        //location.reload();
        Armazenar_Mais_Menos();
        // Redirecionar para a próxima página
        window.location.href = '/produtos/aRESUMO/pagina-Resumo.html';
        //window.location.href = '../aRESUMO/pagina-Resumo.html';
    }

}


let indiceProduto = sessionStorage.length;
let indiceValor = sessionStorage.length;

const ProdutoEscolhido = () => {
    const botaoEnviar = document.querySelector(".botaoAcomp")

    if (botaoEnviar) {

        let dataText = botaoEnviar.getAttribute('data-text'); // Obtém o valor de data-text
        let valorProduto = parseFloat(botaoEnviar.value); // Obtém o valor do produto


        const NomeProduto = `escolhaProduto_${indiceProduto}`;
        const ValorProduto = `escolhaProdutoValor_${indiceValor}`;

        sessionStorage.setItem(NomeProduto, dataText);
        sessionStorage.setItem(ValorProduto, valorProduto);
    }


}

document.querySelector(".botaoAcomp").addEventListener("click", () => {
    ProdutoEscolhido()
    concluirPedido()
    validacoes()
})