export function consumoEnergia() {
    let nome = prompt("> Nome do aparalho: ");
    let consumo = parseFloat(prompt("> Consumo em KwH: "));
    let tempo = parseFloat(prompt("> Uso diário em horas: "));

    let consumoDia = consumo * tempo;
    let consumoMes = consumo * (tempo * 30);

    alert(`${nome.toUpperCase()}:
        Consumo diário: ${consumoDia}KwH
        Consumo mensal: ${consumoMes}KwH
        Gasto diário: R$${consumoDia * 0.9}
        Gasto mensal: R$${consumoMes * 0.9}
    `)
}