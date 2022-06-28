<template>
    <div id="home">
        <Navbar></Navbar>
        <HomeView></HomeView>
    </div>
</template>

<script>
  import Navbar from '@/view/Navbar'
  import HomeView from '@/view/HomeView'
  export default {
    name: 'Home',
    components: {
        HomeView,
        Navbar,
    }
  }
</script>
