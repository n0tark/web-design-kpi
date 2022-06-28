<template>
    <div id="HomeView">
        <div class="bg_main">
            <div class="container">
                <div class="bg-white rounded-5 opacity-75 float-end p-5 text-center" style="max-width: 500px; margin-top: 90px;">
                    <p class="fs-5">Hello, this is <span style="font-weight: 700; color: blueviolet;"><i>discverio</i></span> and here we all aim to improve the overall knowledge of English by assisting you add new words to your vocabulary, and help everyone make one more step to perspective future with no language bariers at all.</p>
                </div>
            </div> 
            <div class="position-absolute container-fluid d-flex justify-content-center" style="top: 85%;">
                <router-link class="btn btn-warning fs-1 fw-bold rounded-3 " style="padding: 15px 40px; color: red" to="/Control">Try Your Skills!</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeView',
        components: {
        }
    }
</script>

<style>
    .bg_main {
        min-height: 70vh;
        background-image: url(../../img/main.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 60vw;
    }
</style>
