// conceito de classe - sempre inicia com letra maiuscula

function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`;
  };
}

// const novoUser = new User("Juliana", "juliana@email.com");
// console.log(novoUser.exibirInfos());

function Admin(role) {
  User.call(this, "Roberta", "roberta@admin.com");
  this.role = role || "estudante";
}

Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin("admin");

console.log(novoUser.exibirInfos());
console.log(novoUser.role);
