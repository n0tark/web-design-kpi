<template>
    <div id="RegisterView">
        <header>
            <div class="container-fluid d-flex align-items-center justify-content-between" style="height: 75px">
                <div class="p-3"><router-link to="/" class="nav-brand p-2"><img src="../../img/logo.png" style="height: 65px"></router-link></div>
                <div class="p-4"><router-link to="/" class="nav-link"><img src="../../svg/x.svg" style="height: 50px"></router-link></div>
            </div>
        </header>
        <form id="reg-form-input">
        <div class="container-fluid d-flex justify-content-center position-absolute" style="top: 20%">
          <div class="border border-primary rounded-5" style="height: 550px; padding: 45px; width: 380px">
            <div class="fs-3 fw-bold d-flex text-left mb-3">Create an account</div>
            <div>
              <div class="mb-2">
                <label for="reg-email" class="form-label fw-bold">Email</label>
                <span class="float-end">Already have an account?<router-link class="link-secondary" to="/Login">Log in</router-link></span>
                <input type="email" class="form-control" id="reg-email" required>
              </div>
              <div class="mb-2">
                <label for="reg-full-name" class="form-label fw-bold">Full name</label>
                <input type="text" class="form-control" id="reg-full-name" required>
              </div>
              <div class="mb-2">
                <label for="reg-date" class="form-label fw-bold">Date of birth</label>
                <input type="date" class="form-control form-control-lg border-primary" id="reg-date" required>
              </div>
              <div class="mb-3">
                <label for="reg-password" class="form-label fw-bold">Password</label>
                <input type="password" class="form-control" id="reg-password" required>
              </div>
              <div class="d-inline-flex mb-4">
                <div class="form-check form-check-inline" style="padding-right: 20px">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="reg-radio-male" value="male" checked required>
                  <label class="form-check-label" for="reg-radio-male">Male</label>
                </div>
                <div>
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="reg-radio-female" value="female" required>
                  <label class="form-check-label" for="reg-radio-female">Female</label>
                </div>
              </div>
            </div>
            <div class="text-center">
              <button class="btn btn-warning fw-bold rounded-pill" style="padding: 10px 0; width: 100%"
               id="reg-sign-up" type="submit" @click="registerAcc">Sign up</button>
              <div id="reg-responce"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        name: 'RegisterView',
        components: {
        },
        data() {
            return {
                user: { },
                newUser: { }
            }
        },
        mounted() {
            axios.get('http://localhost:3000/').then ((response) => {
                this.user = response.data.profile;
            }).catch((error) => {
                console.log(error);
            })
        },
        methods: {
            registerAcc() {
                let formInvalid = false;
                $('#reg-form-input input').each(function() {
                    if ($(this).val() === '') 
                        formInvalid = true;
                });

                if (formInvalid == false) {
                    let savedServer = false;
                    let radioMale = document.querySelector('#reg-radio-male');
                    let radioFemale = document.querySelector('#reg-radio-female');
                    let sex = null;
                    if (radioMale.checked == true) sex = radioMale.value;
                    else sex = radioFemale.value;
                    for (let profile of this.user) {
                        if (profile.fullName.toLowerCase().trim() == $('#reg-full-name').val().toLowerCase().trim() &&
                            profile.password == $('#reg-password').val() &&
                            profile.email == $('#reg-email').val() &&
                            profile.date == $('#reg-date').val() &&
                            profile.sex == sex) {
                                savedServer = true;
                                break;
                        }
                    }
                    if (savedServer == true) {
                        this.$store.state.logined = false;
                        alert("Your data is already registered");
                        this.$router.push({ name: 'Login' })
                    }
                    else {
                        this.$store.state.logined = false;
                        axios.post('http://localhost:3000/addConfig', {"fullName": $('#reg-full-name').val(),
                                                                        "password": $('#reg-password').val(),
                                                                        "email": $('#reg-email').val(),
                                                                        "date": $('#reg-date').val(),
                                                                        "sex": sex})
                            .then((result) => { console.warn(result);
                                alert("done");
                            }).catch((error) => { console.log(error);
                        })
                        alert('Data was successfully registered on the server');
                        this.$router.push({ name: 'Login' })
                    }
                }
            }
        }
    }
</script>