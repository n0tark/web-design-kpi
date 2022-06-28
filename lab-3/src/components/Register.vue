<template>
    <div id="register">
        <Navbar></Navbar>
        <RegisterView></RegisterView>
    </div>
</template>

<script>
  import RegisterView from '@/view/RegisterView'

  export default {
    name: 'Register',
    components: {
        RegisterView
    }
  }
</script>
