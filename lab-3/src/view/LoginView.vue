<template>
    <div id="LoginView">
        <header>
            <div class="container-fluid d-flex align-items-center justify-content-between" style="height: 75px">
                <div class="p-3"><router-link to="/" class="nav-brand p-2"><img src="../../img/logo.png" style="height: 65px"></router-link></div>
                <div class="p-4"><router-link to="/" class="nav-link"><img src="../../svg/x.svg" style="height: 50px"></router-link></div>
            </div>
        </header>
        <div class="container-fluid d-flex justify-content-center position-absolute" style="top: 30%">
             <div class="border border-primary rounded-5" style="height: 400px; padding: 45px; width: 380px">
                 <div class="fs-3 fw-bold d-flex text-left mb-3">Log in</div>
                 <div>
                     <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label fw-bold">Email</label>
                        <span class="float-end">Need an account?<router-link class="link-secondary" to="/Register">Sign up</router-link></span>
                        <input type="email" class="form-control" id="login-email" required>
                    </div>
                    <div class="mb-5">
                        <label for="login-password" class="form-label fw-bold">Password</label>
                        <input type="password" class="form-control" id="login-password" required>
                    </div>
                </div>
                <div class="text-center">
                    <button class="btn btn-warning fw-bold rounded-pill" style="padding: 10px 0; width: 100%"
                    type="submit" id="login-sign-in" @click="loginAcc">Log in</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        name: 'LoginView',
        components: {
        },
        data() {
            return {
                user: { },
                loginUser: { }
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
           loginAcc() {
                let loginInvalid = true;

                for (let profile of this.user) {
                    if (profile.password == $('#login-password').val() && profile.email == $('#login-email').val()) {
                        loginInvalid = false;
                        this.loginUser = profile;
                         break;
                    }
                }
                if (loginInvalid == false) {
                    this.$store.state.fullName = this.loginUser.fullName;
                    this.$store.state.password = this.loginUser.password;
                    this.$store.state.email = this.loginUser.email;
                    this.$store.state.date = this.loginUser.date;
                    this.$store.state.sex = this.loginUser.sex;

                    this.$store.state.logined = true;

                    alert("Successfully logined");

                    this.$router.push({ name: 'Profile' })
                }
                else alert('Your data is not on the server');
            }
        }
    }
</script>
