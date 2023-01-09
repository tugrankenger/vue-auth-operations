<template>
  <div>
    <app-header></app-header>
    <app-home-page></app-home-page>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import HomePage from "./pages/Homepage.vue"
import Auth from "./pages/auth/Auth.vue"
import About from "./pages/About.vue"
  export default{
    components:{
      appHeader: Header,
      appHomePage: HomePage,
      Auth,
      About
    }
  }
</script>