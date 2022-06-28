<template>
    <div id="control">
        <Navbar></Navbar>
        <ControlView></ControlView>
        <Footer></Footer>
    </div>
</template>

<script>
  import Navbar from '@/view/Navbar'
  import Footer from '@/view/Footer'
  import ControlView from '@/view/ControlView'
  export default {
    name: 'Control',
    components: {
        ControlView,
        Navbar,
        Footer
    }
  }
</script>