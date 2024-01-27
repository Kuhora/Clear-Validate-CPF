export default class ValidateCpf {
  constructor(element) {
    this.element = element;
  }
  clear(cpf) {
    return cpf.replace(/\D/g, '');
  }
  construct(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }
  format(cpf) {
    const cpfClear = this.limpar(cpf);
    return this.construir(cpfClear);
  }
  validate(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    return (matchCpf && matchCpf[0] === cpf);
  }
  validateChange(cpfElement) {
    if(this.validate(cpfElement.value)) {
      cpfElement.value = this.format(cpfElement.value);
      cpfElement.classList.add('valido');
      cpfElement.classList.remove('erro');
      cpfElement.nextElementSibling.classList.remove('ativar');
    } else {
      cpfElement.classList.add('erro');
      cpfElement.classList.remove('valido');
      cpfElement.nextElementSibling.classList.add('ativar');
    }
  }
  addEvent() {
    this.element.addEventListener('change', () => {
      this.validateChange(this.element);
    })
  }
  addError4Span() {
    const erroElement = document.createElement('span');
    erroElement.classList.add('erro-text');
    erroElement.innerText = 'CPF Inválido';
    this.element.parentElement.insertBefore(erroElement, this.element.nextElementSibling);
  }
  init() {
    this.addEvent();
    this.addError4Span();
    return this;
  }
}