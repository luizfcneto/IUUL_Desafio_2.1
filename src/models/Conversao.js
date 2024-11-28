import { formataTaxa, formataValorParaVirgula } from "../utils/valor.js";

export default class Conversao {
    #moedaOrigem;
    #moedaDestino;
    #taxa;
    #valorOrigem;
    #valorDestino;

    constructor(moedaOrigem, moedaDestino, valorOrigem){
        this.#moedaOrigem = moedaOrigem;
        this.#moedaDestino = moedaDestino;
        this.#valorOrigem = valorOrigem;
    }

    setTaxa(taxa) {
        this.#taxa = taxa.toFixed(6);
    }

    get moedaOrigem(){
        return this.#moedaOrigem;
    }

    get moedaDestino(){
        return this.#moedaDestino;
    }

    get taxa(){
        return this.#taxa;
    }

    get valorOrigem(){
        return this.#valorOrigem;
    }

    get valorDestino(){
        return this.#valorDestino;
    }

    calculaValorDestino(){
        this.#valorDestino = this.valorOrigem * this.taxa;
    }

    toString(){
        return `${this.moedaOrigem} ${formataValorParaVirgula(this.valorOrigem)} => ${this.moedaDestino} ${formataValorParaVirgula(this.valorDestino)}
Taxa: ${formataTaxa(this.taxa)}`;
    }

    toJSON() {
        return {
            moedaOrigem: this.moedaOrigem,
            valorOrigem: this.valorOrigem,
            moedaDestino: this.moedaDestino,
            valorDestino: this.valorDestino,
            taxa: this.taxa
        }
    }

}