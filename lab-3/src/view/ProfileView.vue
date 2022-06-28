<template>
    <div id="ProfileView">
        <div class="container d-flex justify-content-center">
            <div class="mt-2">
            <img src="../../img/profile.png" style="max-height: 180px;">
            </div>
            <table class="table mt-3 position-absolute table-bordered border border-5 border-danger" style="top: 35%; max-width: 450px;">
                <caption id="profile-table"></caption>
                <tbody>
                    <tr>
                        <th scope="col" class="bg-warning p-3">Full name</th>
                        <td class="pt-3" id="profile-date" v-if="$store.state.logined === true">{{$store.state.fullName}}</td>
                        <td class="pt-3" id="profile-date" v-else>unknown name</td>
                    </tr>
                    <tr>
                        <th scope="col" class="bg-warning p-3">Email</th>
                        <td class="pt-3" id="profile-date" v-if="$store.state.logined === true">{{$store.state.email}}</td>
                        <td class="pt-3" id="profile-date" v-else>unknown email</td>
                    </tr>
                    <tr>
                        <th scope="col" class="bg-warning p-3">Birth day</th>
                        <td class="pt-3" id="profile-date" v-if="$store.state.logined === true">{{$store.state.date}}</td>
                        <td class="pt-3" id="profile-date" v-else>unknown date</td>
                    </tr>
                    <tr>
                        <th scope="col" class="bg-warning p-3">Sex</th>
                        <td class="pt-3" id="profile-date" v-if="$store.state.logined === true">{{$store.state.sex}}</td>
                        <td class="pt-3" id="profile-date" v-else>unknown sex</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProfileView',
        components: {
        },
        methods: {
        }
    }
</script>
