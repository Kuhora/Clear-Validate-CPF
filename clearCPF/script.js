const cpfsList = document.querySelectorAll('.cpf li');


const elementInnerText = ([...elements]) => {

  return elements.map(element => element.innerText);
};

const clearCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
}

const buildCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formatCPFS = (cpfs) => {
  return cpfs.map(clearCPF).map(buildCPF);
}

const replaceCPFS = (cpfsElements) => {
  const cpfs = elementInnerText(cpfsElements);
  const cpfsFormatted = formatCPFS(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatted[index];
  });
}

replaceCPFS(cpfsList)

