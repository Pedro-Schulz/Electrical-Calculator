export function conversao() {
    alert(`
        \nTABELA DE CONVERSÃO:
        \n T (tera) - 1
        \n G (giga) - 2
        \n M (mega) - 3
        \n k (kilo) - 4
        \n Unidade base - 5
        \n m (mili) - 6
        \n μ (micro) - 7
        \n n (nano) - 8
        \n p (pico) - 9
    `);

    const unidadeConversao = ["T", "G", "M", "k", "", "m", "μ", "n", "p"];

    let unidadeBase = prompt("> Unidade base: (ex: Ampères): ");
    let unidadeInicio = parseInt(prompt("\n> Unidade inicial: (seguindo a tabela) "));
    let unidadeFim = parseInt(prompt("\n> Unidade final: (seguindo a tabela) "));
    let valor = parseFloat(prompt("\n> Valor a ser convertido: "));

    let resultado = valor * (10 ** (3 * (unidadeFim - unidadeInicio)));
    alert(`Resultado: \n${valor}${unidadeConversao[unidadeInicio - 1]}${unidadeBase} -> ${resultado}${unidadeConversao[unidadeFim - 1]}${unidadeBase}`);
}