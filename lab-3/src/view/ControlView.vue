<template>
    <div id="ControlView">
        <form id="control-form">
            <div class="board">
                <div class="container d-flex justify-content-evenly">
                    <div class="position-absolute opacity-75 d-flex flex-column align-items-center flex-wrap fw-bold" style="top: 15%">
                    <div class="row col-12 bg-warning border-danger border border-bottom-0 rounded-top border-5 pt-4 d-flex align-items-center"
                        style="padding-left: 30px">
                        <div class="col" style="max-width: 100px" id="stud-row-1-col-1">{{$store.state.putWord_1_1}}</div>
                        <div class="col-1" style="padding-right: 25px;"><strong>&hArr;</strong></div>
                        <div class="col text-black" id="test-div-input-row-1-col-2">
                        <input type="text" class="form-control-sm border bg-secondary border-white border-2" style="width: 80%; background-color: #fff" id="test-form-input-row-1-col-2" required>
                        </div>
                    </div>
                    <div class="row col-12 bg-warning border-end border-start border-danger border-5 pt-5 d-flex align-items-center" style="padding-left: 30px">
                        <div class="col" style="max-width: 100px" id="stud-row-2-col-1">{{$store.state.putWord_2_1}}</div>
                        <div class="col-1" style="padding-right: 25px;"><strong>&hArr;</strong></div>
                        <div class="col text-black" id="test-div-input-row-2-col-2">
                        <input type="text" class="form-control-sm border bg-secondary border-white border-2" style="width: 80%; background-color: #fff" id="test-form-input-row-2-col-2" required>
                        </div>
                    </div>
                    <div class="row col-12 bg-warning border-end border-start border-danger border-5 pt-5 d-flex align-items-center" style="padding-left: 30px">
                        <div class="col" style="max-width: 100px" id="stud-row-3-col-1">{{$store.state.putWord_3_1}}</div>
                        <div class="col-1" style="padding-right: 25px;"><strong>&hArr;</strong></div>
                        <div class="col text-black" id="test-div-input-row-3-col-2">
                        <input type="text" class="form-control-sm border bg-secondary border-white border-2" style="width: 80%; background-color: #fff" id="test-form-input-row-3-col-2" required>
                        </div>
                    </div>
                    <div class="row col-12 bg-warning border-end border-start border-danger border-5 pt-5 d-flex align-items-center" style="padding-left: 30px">
                        <div class="col" style="max-width: 100px" id="stud-row-4-col-1">{{$store.state.putWord_4_1}}</div>
                        <div class="col-1" style="padding-right: 25px;"><strong>&hArr;</strong></div>
                        <div class="col text-black" id="test-div-input-row-4-col-2">
                        <input type="text" class="form-control-sm border bg-secondary border-white border-2" style="width: 80%; background-color: #fff" id="test-form-input-row-4-col-2" required>
                        </div>
                    </div>
                    <div class="row col-12 bg-warning border-end border-start border-danger border-5 pt-5 d-flex align-items-center" style="padding-left: 30px">
                        <div class="col" style="max-width: 100px" id="stud-row-5-col-1">{{$store.state.putWord_5_1}}</div>
                        <div class="col-1" style="padding-right: 25px;"><strong>&hArr;</strong></div>
                        <div class="col text-black" id="test-div-input-row-5-col-2">
                        <input type="text" class="form-control-sm border bg-secondary border-white border-2" style="width: 80%; background-color: #fff" id="test-form-input-row-5-col-2" required>
                        </div>
                    </div>
                    <div class="row col-12 bg-warning border-end border-start border-bottom rounded-bottom border-danger border-5 pt-5 pb-4 mb-4 d-flex align-items-center" style="padding-left: 30px">
                        <div class="col" style="max-width: 100px" id="stud-row-6-col-1">{{$store.state.putWord_6_1}}</div>
                        <div class="col-1" style="padding-right: 25px;"><strong>&hArr;</strong></div>
                        <div class="col text-black" id="test-div-input-row-6-col-2">
                        <input type="text" class="form-control-sm border bg-secondary border-white border-2" style="width: 80%; background-color: #fff" id="test-form-input-row-6-col-2" required>
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-warning fs-1 fw-bold rounded-3" style="padding: 10px 50px; color: red" id="results" type="submit">See results</button>
                    </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'ControlView',
        components: {
        },
        methods: {
            checkWords() {
                this.$store.state.controlWord_1 = null;
                this.$store.state.controlWord_2 = null;
                this.$store.state.controlWord_3 = null;
                this.$store.state.controlWord_4 = null;
                this.$store.state.controlWord_5 = null;
                let invalidForm = false;
                if (this.$store.state.logined == false) {
                    alert("You need to login to see words")
                    invalidForm = true;
                    this.$router.push({ name: 'Login' })
                }
                if (invalidForm == false) {
                    let emptyForm = false;

                    $('#control-form input').each(function() {
                        if ($(this).val() === '') 
                            emptyForm = true;
                    });

                    if (emptyForm == false) {
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
                    }
                }
            }
        }
    }
</script>

<style>
    .board {
        min-height: 100vh;
        background-image: url(../../img/test.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>
