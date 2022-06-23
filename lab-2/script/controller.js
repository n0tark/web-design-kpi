export default class Controller {
  constructor(outProfile, inputAcc, modeModel, outMode) {
    this.outProfile = outProfile;
    this.inputAcc = inputAcc;
    this.modeModel = modeModel;
    this.outMode = outMode;

    if ($('#reg-sign-up').val() != null)
      document.querySelector('#reg-sign-up').addEventListener('click', (event) => this.inputAcc.registerAcc(event));

    if ($('#login-sign-in').val() != null)
      document.querySelector('#login-sign-in').addEventListener('click', (event) => this.inputAcc.loginAcc(event));

    if ($('#profile-table').val() != null) {
          this.printTable();
        }
          
    if ($('#control-form').val() != null) {
            if (localStorage.getItem("init-words-flag") != "true") this.modeModel.initWords();
            if (localStorage.getItem("init-board-flag") != "true") this.modeModel.initBoard();
            this.printBoard();
            document.querySelector('#results').addEventListener('click', (event) => modeModel.checkWords(event));
        }
    }

  idToHTML() {
      const id = Math.floor(Math.random() * 10000) + 1; 
      document.querySelector('#profile-id').innerHTML = this.outProfile.getId();;
  }

  emailToHTML() {
        document.querySelector('#profile-email').innerHTML = this.outProfile.getEmail();
  }

  fullNameToHTML() {
      document.querySelector('#profile-full-name').innerHTML = this.outProfile.getFullName();
  }

  dateToHTML() {
      document.querySelector('#profile-date').innerHTML = this.outProfile.getDate();
  }

  sexToHTML() {
      document.querySelector('#profile-sex').innerHTML = this.outProfile.getSex();
  }

  printTable() {
    this.idToHTML();
    this.fullNameToHTML();
    this.emailToHTML();
    this.dateToHTML();
    this.sexToHTML();
  }

  printRowsToHTML() {
      document.querySelector('#stud-row-1-col-1').innerHTML = this.outMode.getRow1();
      document.querySelector('#stud-row-2-col-1').innerHTML = this.outMode.getRow2();
      document.querySelector('#stud-row-3-col-1').innerHTML = this.outMode.getRow3();
      document.querySelector('#stud-row-4-col-1').innerHTML = this.outMode.getRow4();
      document.querySelector('#stud-row-5-col-1').innerHTML = this.outMode.getRow5();
      document.querySelector('#stud-row-6-col-1').innerHTML = this.outMode.getRow6();
  }

  printBoard() {
    this.printRowsToHTML();
  }
}