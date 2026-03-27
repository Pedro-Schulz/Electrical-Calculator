export function resistores() {
    let base = [], multiplicador, tolerancia;

    const tabela = {
        "preto": ["0", 1],
        "marrom": ["1", 10, 1],
        "vermelho": ["2", 100, 2],
        "laranja": ["3", 10 ** 3],
        "amarelo": ["4", 10 ** 4],
        "verde": ["5", 10 ** 5],
        "azul": ["6", 10 ** 6],
        "violeta": ["7", 10 ** 7], 
        "cinza": ["8", 10 ** 8],
        "branco": ["9", 10 ** 9, 20],
        "dourado": ["", 0.1, 5],
        "prateado": ["", 0.01, 10]
    };

    let faixas = parseInt(prompt("> Quantidade de faixas (4 ou 5): "));

    if(faixas == 4 || faixas == 5) {
        for(let c = 0; c < faixas; c ++) {
            let cor = prompt(`> ${c + 1}ª faixa: `);
            if(c < faixas - 2) {
                base.push(tabela[cor.toLowerCase()][0]);
            } else if(c == faixas - 2) {
                multiplicador = tabela[cor.toLowerCase()][1];
            } else {
                tolerancia = tabela[cor.toLowerCase()][2];
            }
        }
    }

    let numeroBase = base.join("");
    let resistencia = Number(numeroBase) * multiplicador;

    alert("Resistência: " + resistencia + "Ω\nTolerância: " + tolerancia + "%");
}