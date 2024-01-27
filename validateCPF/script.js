import ValidateCpf from './validate-cpf.js';

const cpf = document.querySelector('#cpf');
const validateCpf = new ValidateCpf(cpf).init();

const validateCPF = new ValidateCpf();

console.log(validateCPF.validate('111 111 111 222'))

console.log(validateCpf)