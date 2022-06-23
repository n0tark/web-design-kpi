export default class Mode {
  constructor() {}

  initWords() {
    localStorage.setItem('Encourage', 'поощрять');
    localStorage.setItem('A reward', 'награда');
    localStorage.setItem('Criminal', 'преступник');
    localStorage.setItem('Probability', 'вероятность');
    localStorage.setItem('Salary', 'зарплата');
    localStorage.setItem('Upset', 'грустный');
    localStorage.setItem('init-words-flag', 'true');
  }

  initBoard() {
    localStorage.setItem('#stud-row-1-col-1', 'Encourage');
    localStorage.setItem('#stud-row-1-col-2', 'Поощрять');
    localStorage.setItem('#stud-row-2-col-1', 'A reward');
    localStorage.setItem('#stud-row-2-col-2', 'Награда');
    localStorage.setItem('#stud-row-3-col-1', 'Criminal');
    localStorage.setItem('#stud-row-3-col-2', 'Преступник');
    localStorage.setItem('#stud-row-4-col-1', 'Probability');
    localStorage.setItem('#stud-row-4-col-2', 'Вероятность');
    localStorage.setItem('#stud-row-5-col-1', 'Salary');
    localStorage.setItem('#stud-row-5-col-2', 'Зарплата');
    localStorage.setItem('#stud-row-6-col-1', 'Upset');
    localStorage.setItem('#stud-row-6-col-2', 'Грустный');
    localStorage.setItem('init-board-flag', 'true');
  }

  checkWords(event) {
        let emptyForm = false;

        $('#control-form input').each(function() {
            if ($(this).val() === '') 
                emptyForm = true;
        });

        if (emptyForm == false) {
            event.preventDefault();

            if ($('#test-form-input-row-1-col-2').val().toLowerCase().trim() ==
                localStorage.getItem(localStorage.getItem("#stud-row-1-col-1"))) 
                    document.querySelector('#test-div-input-row-1-col-2').innerHTML = `верно`;
            else
                document.querySelector('#test-div-input-row-1-col-2').innerHTML = `неверно`;

            if ($('#test-form-input-row-2-col-2').val().toLowerCase().trim() ==
                localStorage.getItem(localStorage.getItem("#stud-row-2-col-1"))) 
                    document.querySelector('#test-div-input-row-2-col-2').innerHTML = `верно`;
            else
                document.querySelector('#test-div-input-row-2-col-2').innerHTML = `неверно`;

            if ($('#test-form-input-row-3-col-2').val().toLowerCase().trim() ==
                localStorage.getItem(localStorage.getItem("#stud-row-3-col-1"))) 
                    document.querySelector('#test-div-input-row-3-col-2').innerHTML = `верно`;
            else
                document.querySelector('#test-div-input-row-3-col-2').innerHTML = `неверно`;

            if ($('#test-form-input-row-4-col-2').val().toLowerCase().trim() ==
                localStorage.getItem(localStorage.getItem("#stud-row-4-col-1"))) 
                    document.querySelector('#test-div-input-row-4-col-2').innerHTML = `верно`;
            else
                document.querySelector('#test-div-input-row-4-col-2').innerHTML = `неверно`;

            if ($('#test-form-input-row-5-col-2').val().toLowerCase().trim() ==
                localStorage.getItem(localStorage.getItem("#stud-row-5-col-1"))) 
                    document.querySelector('#test-div-input-row-5-col-2').innerHTML = `верно`;
            else
                document.querySelector('#test-div-input-row-5-col-2').innerHTML = `неверно`;

            if ($('#test-form-input-row-6-col-2').val().toLowerCase().trim() ==
                localStorage.getItem(localStorage.getItem("#stud-row-6-col-1"))) 
                    document.querySelector('#test-div-input-row-6-col-2').innerHTML = `верно`;
            else
                document.querySelector('#test-div-input-row-6-col-2').innerHTML = `неверно`;

            event.preventDefault();
        }
    }
}