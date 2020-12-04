class Cliente {
  constructor(nome, email, cpf) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
  }
}

function validaEmail(cliente) {
  if (cliente.email.indexOf("@") === -1) {
    return `O email do cliente está incorreto`;
  } else {
    return `O email do cliente está correto`;
  }
}

function validaCPF(cliente) {
  let contador = 10;
  let cpfCliente = cliente.cpf;
  let cpfCalc = cpfCliente.substring(0, 9);
  let rs = 0;
  let resto = 0;

  for (let i = 0; i <= 8; i++) {
    rs += cpfCalc[i] * contador;
    contador--;
  }

  resto = rs % 11;

  if (resto < 2) {
    cpfCalc += "0";
  } else {
    cpfCalc += (11 - resto).toString();
  }

  rs = 0;
  contador = 11;

  for (let i = 0; i <= 9; i++) {
    rs += cpfCalc[i] * contador;
    contador--;
  }

  resto = rs % 11;

  if (resto < 2) {
    cpfCalc += "0";
  } else {
    cpfCalc += (11 - resto).toString();
  }

  if (cpfCalc === cpfCliente) {
    return "CPF Correto";
  } else {
    return "CPF Incorreto";
  }
}

module.exports = {
  Cliente,
  validaCPF,
  validaEmail,
};
