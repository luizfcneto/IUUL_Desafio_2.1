export const formataValorParaVirgula = (valor) => {
    let options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    let formatter = new Intl.NumberFormat('pt-BR', options);
    return formatter.format(valor);
}

export const formataTaxa = (valor) => {
    let options = { minimumFractionDigits: 6, maximumFractionDigits: 6 };
    let formatter = new Intl.NumberFormat('pt-BR', options);
    return formatter.format(valor);
}

export const formataValorParaPonto = (valor) => {
    valor = valor.toString();
    const virgulaIndex = valor.split("").findIndex(char => char === ",");
    if(virgulaIndex !== -1){
        valor = valor.replace(",", ".");
    }
    return parseFloat(valor).toFixed(2);
}