<template>
    <div id="profile">
        <Navbar></Navbar>
        <ProfileView></ProfileView>
        <Footer></Footer>
    </div>
</template>

<script>
  import Navbar from '@/view/Navbar'
  import Footer from '@/view/Footer'
  import ProfileView from '@/view/ProfileView'

  export default {
    name: 'Profile',
    components: {
        ProfileView,
        Navbar,
        Footer
    }
  }
</script>
