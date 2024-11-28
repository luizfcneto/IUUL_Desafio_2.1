import { apiExchangeRateServiceErrors, errorMessages } from "../errors/constants.js";

export default class ApiExchangeRateService {
    #baseUrl;

    constructor(){
        this.#baseUrl = "https://v6.exchangerate-api.com/v6";
    }

    async getPairConversion(conversao){
        const url = this.#buildPairConversionFullUrl(conversao.moedaOrigem, conversao.moedaDestino);
        try {
            const response = await fetch(url);
            const responseJson = await response.json();

            if(!response.ok && response.status !== 200){
                throw new Error(apiExchangeRateServiceErrors[responseJson['error-type']]);
            }

            conversao = this.#parseResponseToConversao(responseJson, conversao);
            return conversao;

        }catch(error){
            throw new Error(error.message || errorMessages.INTERNAL_SERVER_ERROR);
        }
    }

    async getCodigosMoedas(){
        const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY || ""}/codes`;

        try {
            let response = await fetch(url);
            response = await response.json();
            let arrayMoedas = response.supported_codes.map(moeda => { 
                return {
                    code: moeda[0], 
                    nome: moeda[1]
                }    
            });
            console.log(arrayMoedas);
        }catch(error){
            console.log(error.name, error.message);
        }

    }

    #buildPairConversionFullUrl(moedaOrigem, moedaDestino){
        const apiKey = process.env.API_KEY || "";
        return `${this.#baseUrl}/${apiKey}/pair/${moedaOrigem}/${moedaDestino}/` + "100";
    }

    #parseResponseToConversao(responseJson, conversao){
        conversao.setTaxa(responseJson.conversion_rate);
        conversao.calculaValorDestino();
        return conversao;
    }
}