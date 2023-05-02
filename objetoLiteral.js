const user = {
  nome: "Juliana",
  email: "juliana@email.com",
  nascimento: "2004/02/01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: "Mariana",
  email: "mariana@email.com",
  nascimento: "1998/02/19",
  role: "admin",
  ativo: true,
  criarCurso() {
    console.log("curso criado!");
  },
};

//cadeia de prototipos

//primeiro parametro objeto que quer receber
// segundo parametro objeto que quer herdar
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
