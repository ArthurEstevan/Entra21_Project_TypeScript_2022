export class Pessoa {

    //=============================== START OF ATRIBUTOS ===============================//
    public nome: String;
    public cpf: String;
    public rg: String;
    public dataNascimento: String;
    public sexo: String;
    public nomeMae: String;
    public nomePai: String;
    public email: String;
    public cep: String;
    public endereco: String;
    public numero: String;
    public bairro: String;
    public cidade: String;
    public estado: String;
    public telefone: String;
    public saldo: number;
    public contaCorrente: String;
    public agencia: String;
    //=============================== END OF ATRIBUTOS ===============================//

    //=============================== START OF CONSTRUTOR ===============================//
    constructor(nome: String, cpf: String, rg: String, dataNascimento: String, sexo: String, nomeMae: String, nomePai: String, email: String, cep: String, endereco: String, numero: String, bairro: String, cidade: String, estado: String, telefone: String, saldo: number, contaCorrente: String, agencia: String) {

        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.nomeMae = nomeMae;
        this.nomePai = nomePai;
        this.email = email;
        this.cep = cep;
        this.endereco = endereco;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.telefone = telefone;
        this.saldo = saldo;
        this.contaCorrente = contaCorrente;
        this.agencia = agencia;
    }
    //=============================== END OF CONSTRUTOR ===============================//

    //=============================== START OF GETTERS ===============================//
    public get getNome(): String {
        return this.nome;
    }
    public get getCpf(): String {
        return this.cpf;
    }
    public get getRg(): String {
        return this.rg;
    }
    public get getDataNascimento(): String {
        return this.dataNascimento;
    }
    public get getSexo(): String {
        return this.sexo;
    }
    public get getNomePai(): String {
        return this.nomePai;
    }
    public get getNomeMae(): String {
        return this.nomeMae;
    }
    public get getEmail(): String {
        return this.email;
    }
    public get getCep(): String {
        return this.cep;
    }
    public get getEndereco(): String {
        return this.endereco;
    }
    public get getNumero(): String {
        return this.numero;
    }
    public get getBairro(): String {
        return this.bairro;
    }
    public get getCidade(): String {
        return this.cidade;
    }
    public get getEstado(): String {
        return this.estado;
    }
    public get getTelefone(): String {
        return this.telefone;
    }
    public get getSaldo(): number {
        return this.saldo;
    }
    public get getContaCorrente(): String {
        return this.contaCorrente;
    }
    public get getAgencia(): String {
        return this.agencia;
    }
    //=============================== END OF GETTERS ===============================//

    //=============================== START OF SETTERS ===============================//
    public set setNome(nome: String) {
        this.nome = nome;
    }
    public set setCpf(cpf: String) {
        this.cpf = cpf;
    }
    public set setRg(rg: String) {
        this.rg = rg;
    }
    public set setDataNascimento(dataNascimento: String) {
        this.dataNascimento = dataNascimento;
    }
    public set setSexo(sexo: String) {
        this.sexo = sexo;
    }
    public set setNomePai(nomePai: String) {
        this.nomePai = nomePai;
    }
    public set setNomeMae(nomeMae: String) {
        this.nomeMae = nomeMae;
    }
    public set setEmail(email: String) {
        this.email = email;
    }
    public set setCep(cep: String) {
        this.cep = cep;
    }
    public set setEndereco(endereco: String) {
        this.endereco = endereco;
    }
    public set setNumero(numero: String) {
        this.numero = numero;
    }
    public set setBairro(bairro: String) {
        this.bairro = bairro;
    }
    public set setCidade(cidade: String) {
        this.cidade = cidade;
    }
    public set setEstado(estado: String) {
        this.estado = estado;
    }
    public set setTelefone(telefone: String) {
        this.telefone = telefone;
    }
    public set setSaldo(saldo: number) {
        this.saldo = saldo;
    }
    public set setContaCorrente(contaCorrente: String) {
        this.contaCorrente = contaCorrente;
    }
    public set setAgencia(agencia: String) {
        this.agencia = agencia;
    }
    //=============================== END OF SETTERS ===============================//

}