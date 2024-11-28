import { errorMessages } from "../errors/constants.js";

export const validaMoeda = (moeda) => {
    if(moeda.length !== 3){
        throw new Error(errorMessages.CODIGO_INVALIDO);
    }

    const regexSomenteLetra = /^[a-zA-Z]+$/;
    if(!regexSomenteLetra.test(moeda)){
        throw new Error(errorMessages.CODIGO_INVALIDO);
    }
}

export const validaValor = (valor) => {
    const virgulaIndex = valor.split("").findIndex(char => char === ",");
    if(virgulaIndex !== -1){
        valor = valor.replace(",",".");
    }

    valor = Number(valor);
    if(valor < 0){
        throw new Error(errorMessages.VALOR_INVALIDO);
    }

    const regexNumeroValido = /^[0-9]+([,.]?[0-9]+)?$/;
    if(!regexNumeroValido.test(valor)){
        throw new Error(errorMessages.VALOR_INVALIDO);
    }
}