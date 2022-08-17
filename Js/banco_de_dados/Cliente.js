import { Pessoa } from "./Pessoa.js";
export class Cliente extends Pessoa {
    //=============================== END OF ATRIBUTOS ===============================//
    //=============================== START OF CONSTRUTOR ===============================//
    constructor(nome, cpf, rg, dataNascimento, sexo, nomeMae, nomePai, email, cep, endereco, numero, bairro, cidade, estado, telefone, saldo, contaCorrente, agencia, dataCadastro, reclamacoes, senha) {
        super(nome, cpf, rg, dataNascimento, sexo, nomePai, nomeMae, email, cep, endereco, numero, bairro, cidade, estado, telefone, saldo, contaCorrente, agencia);
        this.dataCadastro = dataCadastro;
        this.dataAtualizacao = dataCadastro;
        this.reclamacoes = reclamacoes;
        this.senha = senha;
    }
    //=============================== END OF CONSTRUTOR ===============================//
    //=============================== START OF GETTERS ===============================//
    get getDataCadastro() {
        return this.dataCadastro;
    }
    get getDataAtualizacao() {
        return this.dataAtualizacao;
    }
    get getReclamacoes() {
        return this.reclamacoes;
    }
    getSenha(parm) {
        if (parm == this.cpf) {
            return this.senha;
        }
        else {
            console.log("Desculpe não podemos fornecer");
            return null;
        }
    }
    //=============================== END OF GETTERS ===============================//
    //=============================== START OF SETTERS ===============================//
    set setDataCadastro(dataCadastro) {
        this.dataCadastro = dataCadastro;
    }
    set setDataAtualizacao(dataAtualizacao) {
        this.dataAtualizacao = dataAtualizacao;
    }
    set setReclamacoes(reclamacoes) {
        this.reclamacoes = reclamacoes;
    }
    set setSenha(senha) {
        this.senha = senha;
    }
    //=============================== END OF SETTERS ===============================//
    //=============================== START OF TOSTRING ===============================//
    toString() {
        return `
                        Informações dos Clientes
        =====================================================
        - Nome: ${this.nome}
        - CPF: ${this.cpf}
        - RG: ${this.rg}
        - Data de Nascimento: ${this.dataNascimento}
        - Sexo: ${this.sexo}
        - Nome da Mãe: ${this.nomeMae}
        - Nome do Pai: ${this.nomePai}
        - Email: ${this.email}
        - CEP: ${this.cep}
        - Endereço: ${this.endereco}
        - Número: ${this.numero}
        - Bairro: ${this.bairro}
        - Cidade: ${this.cidade}
        - Estado: ${this.estado}
        - Telefone: ${this.telefone}
        - Saldo: ${this.saldo}
        - Conta Corrente: ${this.contaCorrente}
        - Agência: ${this.agencia}
        - Reclamações: ${this.reclamacoes}
        =====================================================
        `;
    }
}
