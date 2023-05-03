import User from "./User.js";

class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovaEstudante(estudante, curso) {
    return `Estudante ${estudante} aprovado no curso de ${curso}`;
  }
}

const novoDocente = new Docente("Maria", "maria@docente.com", "1970-05-04");

console.log(novoDocente);

console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante("Wandersson", "Javascript"));
