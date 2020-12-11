class Cliente {
  constructor(email, cpf) {
    this.email = email;
    this.cpf = cpf;
  }
}

function validaEmail(cliente) {
  return !(cliente.email.indexOf("@") === -1);
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

  return cpfCalc === cpfCliente;
}

module.exports = {
  Cliente,
  validaCPF,
  validaEmail,
};
