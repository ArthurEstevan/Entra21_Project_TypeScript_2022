export class Empresa {
    //=============================== END OF ATRIBUTOS ===============================//
    //=============================== START OF CONSTRUTOR ===============================//
    constructor(razaoSocial, cnpj, inscricaoEstadual, dataDeAbertura, dono) {
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
        this.dataDeAbertura = dataDeAbertura;
        this.dono = dono;
    }
    //=============================== END OF CONSTRUTOR ===============================//
    //=============================== START OF GETTERS ===============================//
    get getRazaoSocial() {
        return this.razaoSocial;
    }
    get getCnpj() {
        return this.cnpj;
    }
    get getInscriacaoEstadual() {
        return this.getInscriacaoEstadual;
    }
    get getDataDeAbertura() {
        return this.dataDeAbertura;
    }
    get getDono() {
        return this.dono;
    }
    //=============================== END OF GETTERS ===============================//
    //=============================== START OF SETTERS ===============================//
    set setRazaoSocial(razaoSocial) {
        this.razaoSocial = razaoSocial;
    }
    set setCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    set setInscriacaoEstadual(inscriacaoEstadual) {
        this.inscricaoEstadual = inscriacaoEstadual;
    }
    set setDataDeAbertura(dataDeAbertura) {
        this.dataDeAbertura = dataDeAbertura;
    }
    set setDono(dono) {
        this.dono = dono;
    }
    //=============================== END OF SETTERS ===============================//
    //=============================== START OF TOSTRING ===============================//
    toString() {
        return `
                        Informações da Empresa
        =====================================================
        - Razão Social: ${this.razaoSocial}
        - CNPJ: ${this.cnpj}
        - Inscrição Estadual: ${this.inscricaoEstadual}
        - Data de Abertura: ${this.dataDeAbertura}
        - Dono: ${this.dono.nome}
        =====================================================
        `;
    }
}
