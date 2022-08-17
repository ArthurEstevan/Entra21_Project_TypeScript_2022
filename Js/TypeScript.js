import { Cliente } from "./banco_de_dados/Cliente.js";
import { Empresa } from "./banco_de_dados/Empresa.js";
let cliente01 = new Cliente("Manoel Tiago Baptista", "847.008.486-00", "847.008.486-00", "03/03/1981", "Masculino", "Rosângela Nina Olivia", "Marcos Kauê Baptista", "manoel-baptista76@fernandesfilpi.com.br", "56507-120", "Rua Primeiro de Agosto", "351", "Cidade Jardim", "Arcoverde", "PE", "(87) 3528-2357", 10000, "45288-6", "8112", "16/08/2022", ["Ótimo banco, atendeu minhas expectativas."], "JPg9jG6J8i");
console.log(cliente01.toString());
let empresa01 = new Empresa("Marli e Cláudio Padaria Ltda", "10.237.745/0001-22", "697.306.912.474", "20/08/2017", cliente01);
console.log(empresa01.toString());
