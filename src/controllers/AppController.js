import PromptSync from "prompt-sync";
import { validaMoeda, validaValor } from "../validations/ConversaoValidations.js";
import { showConversao, showError } from "../views/AppView.js";
import ApiExchangeRateService from "../services/ApiExchangeRateService.js";
import Conversao from "../models/Conversao.js";
import { formataValorParaPonto } from "../utils/valor.js";
const prompt = new PromptSync({sigint: true});

export default class AppController {
    #api

    constructor(apiExchangeRateService = undefined){
        if((this.#api === null || this.#api === undefined) && (apiExchangeRateService === null || apiExchangeRateService === undefined)){
            this.#api = new ApiExchangeRateService();
        }else {
            this.#api = apiExchangeRateService;
        }
    }

    async init(){
        let moedaOrigem;
        let moedaDestino;
        let valor;

        try {
            do {
                moedaOrigem = this.#leDados("Moeda origem: ");
                validaMoeda(moedaOrigem);
                moedaDestino = this.#leDados("Moeda destino: ");
                validaMoeda(moedaDestino);
                valor = this.#leDados("Valor: ");
                validaValor(valor);
                let conversao = new Conversao(moedaOrigem, moedaDestino, formataValorParaPonto(valor));
                
                conversao = await this.#api.getPairConversion(conversao);
                showConversao(conversao);

            } while (moedaOrigem.length !== 0);

        }catch(error){
            showError(error.message);
        }   
    }

    #leDados(titulo){
        return prompt(titulo);
    }

}

