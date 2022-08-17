export class Pessoa {
    //=============================== END OF ATRIBUTOS ===============================//
    //=============================== START OF CONSTRUTOR ===============================//
    constructor(nome, cpf, rg, dataNascimento, sexo, nomeMae, nomePai, email, cep, endereco, numero, bairro, cidade, estado, telefone, saldo, contaCorrente, agencia) {
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
    get getNome() {
        return this.nome;
    }
    get getCpf() {
        return this.cpf;
    }
    get getRg() {
        return this.rg;
    }
    get getDataNascimento() {
        return this.dataNascimento;
    }
    get getSexo() {
        return this.sexo;
    }
    get getNomePai() {
        return this.nomePai;
    }
    get getNomeMae() {
        return this.nomeMae;
    }
    get getEmail() {
        return this.email;
    }
    get getCep() {
        return this.cep;
    }
    get getEndereco() {
        return this.endereco;
    }
    get getNumero() {
        return this.numero;
    }
    get getBairro() {
        return this.bairro;
    }
    get getCidade() {
        return this.cidade;
    }
    get getEstado() {
        return this.estado;
    }
    get getTelefone() {
        return this.telefone;
    }
    get getSaldo() {
        return this.saldo;
    }
    get getContaCorrente() {
        return this.contaCorrente;
    }
    get getAgencia() {
        return this.agencia;
    }
    //=============================== END OF GETTERS ===============================//
    //=============================== START OF SETTERS ===============================//
    set setNome(nome) {
        this.nome = nome;
    }
    set setCpf(cpf) {
        this.cpf = cpf;
    }
    set setRg(rg) {
        this.rg = rg;
    }
    set setDataNascimento(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
    set setSexo(sexo) {
        this.sexo = sexo;
    }
    set setNomePai(nomePai) {
        this.nomePai = nomePai;
    }
    set setNomeMae(nomeMae) {
        this.nomeMae = nomeMae;
    }
    set setEmail(email) {
        this.email = email;
    }
    set setCep(cep) {
        this.cep = cep;
    }
    set setEndereco(endereco) {
        this.endereco = endereco;
    }
    set setNumero(numero) {
        this.numero = numero;
    }
    set setBairro(bairro) {
        this.bairro = bairro;
    }
    set setCidade(cidade) {
        this.cidade = cidade;
    }
    set setEstado(estado) {
        this.estado = estado;
    }
    set setTelefone(telefone) {
        this.telefone = telefone;
    }
    set setSaldo(saldo) {
        this.saldo = saldo;
    }
    set setContaCorrente(contaCorrente) {
        this.contaCorrente = contaCorrente;
    }
    set setAgencia(agencia) {
        this.agencia = agencia;
    }
}
