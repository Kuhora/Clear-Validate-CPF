const cpfs = document.querySelectorAll('.cpf li');


const elementInnerText = ([...elements]) => {

  return elements.map(element => element.innerText);
};

const clearCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
}

const buildCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

console.log(clearCPF('121.121.222 33'));
console.log(buildCPF('12112122233'));
console.log(elementInnerText(cpfs));


