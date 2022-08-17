import { Pessoa } from "./Pessoa.js"


export class Empresa {

    //=============================== START OF ATRIBUTOS ===============================//
    public razaoSocial: String
    public cnpj: String
    public inscricaoEstadual: String
    public dataDeAbertura: String
    public dono: Pessoa;
    //=============================== END OF ATRIBUTOS ===============================//

    //=============================== START OF CONSTRUTOR ===============================//
    constructor(razaoSocial: String, cnpj: String, inscricaoEstadual: String, dataDeAbertura: String, dono: Pessoa) {

        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
        this.dataDeAbertura = dataDeAbertura;
        this.dono = dono;
    }
    //=============================== END OF CONSTRUTOR ===============================//

    //=============================== START OF GETTERS ===============================//
    public get getRazaoSocial(): String {
        return this.razaoSocial;
    }
    public get getCnpj(): String {
        return this.cnpj;
    }
    public get getInscriacaoEstadual(): String {
        return this.getInscriacaoEstadual;
    }
    public get getDataDeAbertura(): String {
        return this.dataDeAbertura;
    }
    public get getDono(): Pessoa {
        return this.dono;
    }
    //=============================== END OF GETTERS ===============================//

    //=============================== START OF SETTERS ===============================//
    public set setRazaoSocial(razaoSocial: string) {
        this.razaoSocial = razaoSocial;
    }
    public set setCnpj(cnpj: string) {
        this.cnpj = cnpj;
    }
    public set setInscriacaoEstadual(inscriacaoEstadual: string) {
        this.inscricaoEstadual = inscriacaoEstadual;
    }
    public set setDataDeAbertura(dataDeAbertura: string) {
        this.dataDeAbertura = dataDeAbertura;
    }
    public set setDono(dono: Pessoa) {
        this.dono = dono;
    }
    //=============================== END OF SETTERS ===============================//

    //=============================== START OF TOSTRING ===============================//

    public toString() : String {
        return `
                        Informações da Empresa
        =====================================================
        - Razão Social: ${this.razaoSocial}
        - CNPJ: ${this.cnpj}
        - Inscrição Estadual: ${this.inscricaoEstadual}
        - Data de Abertura: ${this.dataDeAbertura}
        - Dono: ${this.dono.nome}
        =====================================================
        `
    }
    //=============================== END OF TOSTRING ===============================//

    //  public razaoSocial: String
    // public cnpj: String
    // public inscricaoEstadual: String
    // public dataDeAbertura: String
    // public dono: Pessoa;


}