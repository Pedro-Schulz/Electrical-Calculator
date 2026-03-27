export function req() {
    let resistores = [], resultadoSerie = 0, totalParalelo = 0;
    let numeroResistores = parseInt(prompt("> Números de resistores no circuito: "));

    for(let c = 0; c < numeroResistores; c ++) {
        resistores[c] = parseFloat(prompt("> Resistência do " + (c + 1) + "º resistor: "));
        resultadoSerie += resistores[c];
        totalParalelo += 1 / resistores[c];
    }

    alert(`
        Resistência em série: ${resultadoSerie} Ω
        Resistência em paralelo: ${(1 / totalParalelo).toFixed(2)} Ω
    `)
}