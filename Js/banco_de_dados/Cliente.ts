import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa {

    //=============================== START OF ATRIBUTOS ===============================//
    public dataCadastro: String
    public dataAtualizacao: String
    public reclamacoes: Array<String>
    public senha: String
    //=============================== END OF ATRIBUTOS ===============================//

    //=============================== START OF CONSTRUTOR ===============================//
    constructor(nome: String, cpf: String, rg: String, dataNascimento: String, sexo: String, nomeMae: String, nomePai: String, email: String, cep: String, endereco: String, numero: String, bairro: String, cidade: String, estado: String, telefone: String, saldo: number, contaCorrente: String, agencia: String, dataCadastro: String, reclamacoes: Array<String>, senha: String) {

        super(nome, cpf, rg, dataNascimento, sexo, nomePai, nomeMae, email, cep, endereco, numero, bairro, cidade, estado, telefone, saldo, contaCorrente, agencia);

        this.dataCadastro = dataCadastro;
        this.dataAtualizacao = dataCadastro;
        this.reclamacoes = reclamacoes;
        this.senha = senha;
    }
    //=============================== END OF CONSTRUTOR ===============================//

    //=============================== START OF GETTERS ===============================//
    public get getDataCadastro(): String {
        return this.dataCadastro;
    }

    public get getDataAtualizacao(): String {
        return this.dataAtualizacao;
    }

    public get getReclamacoes(): Array<String> {
        return this.reclamacoes;
    }

    public getSenha(parm : String) : String {

        if (parm == this.cpf) {
            return this.senha
        } else {
            console.log("Desculpe não podemos fornecer");
            return null 
        }
    }
    //=============================== END OF GETTERS ===============================//


    //=============================== START OF SETTERS ===============================//
    public set setDataCadastro(dataCadastro: String) {
        this.dataCadastro = dataCadastro;
    }

    public set setDataAtualizacao(dataAtualizacao: String) {
        this.dataAtualizacao = dataAtualizacao;
    }

    public set setReclamacoes(reclamacoes: Array<String>) {
        this.reclamacoes = reclamacoes;
    }

    public set setSenha(senha: String) {
        this.senha = senha;
    }
    //=============================== END OF SETTERS ===============================//

    //=============================== START OF TOSTRING ===============================//

    public toString() : String {
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
        `
    }
    //=============================== END OF TOSTRING ===============================//
}
