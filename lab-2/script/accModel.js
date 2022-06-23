export default class Account {
  constructor() {
    this.fullName = null;
    this.password = null;
    this.email = null;
    this.date = null;
    this.sex = null;
    this.logined = false;
  }

  registerAcc(event) {
    let formInvalid = false;

    $('#reg-form-input input').each(function () {
      if ($(this).val() === '')
          formInvalid = true;
    });

    if (formInvalid == false) {
      this.logined = false;
      localStorage.setItem('#login-logined', this.logined);

      this.fullName = $('#reg-full-name').val();
      this.password = $('#reg-password').val();
      this.email = $('#reg-email').val();
      this.date = $('#reg-date').val();

      let radioMale = document.querySelector('#reg-radio-male');
      let radioFemale = document.querySelector('#reg-radio-female');

      if (radioMale.checked == true) this.sex = radioMale.value;
      else this.sex = radioFemale.value;
      
      localStorage.setItem('#reg-full-name', this.fullName);
      localStorage.setItem('#reg-password', this.password);
      localStorage.setItem('#reg-email', this.email);
      localStorage.setItem('#reg-date', this.date);
      localStorage.setItem('#reg-radio-sex', this.sex);
      event.preventDefault();
      document.location.href = 'http://127.0.0.1:5500/src/login.htm';
    }
  }

  loginAcc(event) {
    let loginInvalid = false;
    if ($('#login-email').val() != localStorage.getItem('#reg-email') || 
    $('#login-password').val() != localStorage.getItem('#reg-password')) {
      loginInvalid = true;
      alert("No match, try again.");
    }
    if (loginInvalid == false) {
      this.logined = true;
      localStorage.setItem('#login-logined', this.logined);
      event.preventDefault();
      document.location.href = 'http://127.0.0.1:5500/src/profile.htm';
    }
  }
}
