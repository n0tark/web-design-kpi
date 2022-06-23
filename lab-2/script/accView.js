export default class OutputAccount {
  constructor() {}
  getFullName = () => localStorage.getItem('#reg-full-name');
  getPassword = () => localStorage.getItem('#reg-password');
  getEmail = () => localStorage.getItem('#reg-email');
  getId = () => Math.floor(Math.random() * 10000) + 1; 
  getDate = () => localStorage.getItem('#reg-date');
  getSex = () => localStorage.getItem('#reg-radio-sex');
  getLogined = () => localStorage.getItem('#login-logined');
}
