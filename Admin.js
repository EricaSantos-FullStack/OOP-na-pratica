import User from "./User.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
  }
}

const novoAdmin = new Admin("Rodrigo", "rodrigo@admin.com", "1980-01-21");

console.log(novoAdmin.criarCurso("Javascript", "20"));