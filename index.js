import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// usando esse index.js para instanciar as classes

const novoUser = new User("Mariana", "mariana@email.com", "2001-01-21");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Rodrigo", "rodrigo@admin.com", "1980-05-16");
console.log(novoAdmin.nome);

//testando erro
// novoAdmin.nome = "";
// console.log(novoAdmin.nome);

novoAdmin.nome = "Marcos";
console.log(novoAdmin.nome);
