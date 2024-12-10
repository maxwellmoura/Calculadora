// Seleção de elementos do DOM
const multiplicadorForm = document.querySelector("#multiplicador-form");
const numberInput = document.querySelector("#number");
const multiplicadorInput = document.querySelector("#multiplicador");
const multiplicadorTabela = document.querySelector("#multiplicador-operacao");
const multiplicadorTitulo = document.querySelector("#multiplicador-titulo span");

// Função para criar a tabela da tabuada
const creandoTabela = (number, multiplicadorNumber) => {
    // Limpa os resultados anteriores
    multiplicadorTabela.innerHTML = "";

    // Gera a tabuada com base nos valores fornecidos
    for (let i = 1; i <= multiplicadorNumber; i++) {
        const resultado = number * i;

        // Template para cada linha da tabuada
        const template = `<div class="row">
            <div class="operacao">${number} x ${i} =</div>
            <div class="resultado">${resultado}</div>
        </div>`;

        // Converte o template para HTML e adiciona à tabela
        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");
        multiplicadorTabela.appendChild(row);
    }

    // Atualiza o título da tabela com o número base
    multiplicadorTitulo.innerHTML = number;
};

// Evento para tratar o envio do formulário
multiplicadorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtem os valores inseridos pelo usuário
    const multiplicadoNumero = +numberInput.value;
    const multiplicadorNumber = +multiplicadorInput.value;

    // Valida os inputs antes de gerar a tabela
    if (!multiplicadoNumero || !multiplicadorNumber) return;

    // Chama a função para criar a tabela
    creandoTabela(multiplicadoNumero, multiplicadorNumber);
});
