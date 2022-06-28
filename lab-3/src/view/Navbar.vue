<template>
    <div id="navbar">
        <div class="container" style="max-width: 1420px;">
            <nav class="navbar navbar-expand-lg fw-bold">
                <div class="d-flex align-items-center">
                    <router-link to="/" class="nav-brand m-0" ><img src="../../img/logo.png" style="height: 40px;"></router-link>
                    <router-link to="/" class="navbar-brand text-uppercase fs-3 fw-bold p-0" style="color: blueviolet;">discverio</router-link>
                </div>
                <button class="navbar-toggler align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
                <span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarMenu">
                    <ul class="navbar-nav table-hover fw-bold" style="margin-left: auto;">
                        <li style="padding-left: 35px"><router-link class="nav-link btn" to="/Register">Sign up</router-link></li>
                        <li style="padding-left: 35px"><router-link class="nav-link btn" to="/Login">Login</router-link></li>
                        <li style="padding-left: 35px"><router-link class="nav-link btn">Knowledge<img src="../../svg/lock-fill.svg"></router-link>
                            <ul class="dropdown-menu bg-warning " style="left: initial" aria-labelledby="navbarDropdown"></ul>
                        </li>
                        <li style="padding-left: 35px"><router-link class="nav-link btn" to="/Profile">Profile</router-link></li>
                    </ul>
                </div>
            </nav>
	    </div>
    </div>
</template>
<script>
    export default {
        name: 'Navbar',
        components: {
        }
    }
</script>