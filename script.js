const cpfs = document.querySelectorAll('.cpf li');

function elementInnerText([...elements]) {
  const arrayElements = Array.from(elements);

  return arrayElements.map(element => {
    return element.innerText;
  });
};

console.log(elementInnerText(cpfs));