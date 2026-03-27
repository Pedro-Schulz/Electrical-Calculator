export function leiOhm() {
    let valores = [], confirmarCalculo = 0, resultado = 0;

    alert("Campo vazio para incógnita!");
    valores[0] = parseFloat(prompt("> Tensão (V): "));
    valores[1] = parseFloat(prompt("> Corrente (A): "));
    valores[2] = parseFloat(prompt("> Resistência (Ω): "));

    for(let c = 0; c < valores.length; c ++) {
        if(!isNaN(valores[c])) {
            confirmarCalculo ++;
        }
    }

    if(confirmarCalculo >= 2) {
        if(isNaN(valores[0])) {
            alert("Tensão = " + (valores[1] * valores[2]) + "V");
        } else if(isNaN(valores[1])) {
            alert("Corrente = " + (valores[0] / valores[2]) + "A");
        } else if(isNaN(valores[2])) {
            alert("Resistência = " + (valores[0] / valores[1]) + "Ω");
        }
    } else {
        alert("Condições para cálculo inatingidas!");
    }
}