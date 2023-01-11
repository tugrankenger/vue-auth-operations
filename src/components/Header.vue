<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow mb-5">
    <a href="javascript:void(0)" class="navbar-brand px-3">Auth Operations</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto">
        <router-link class="nav-item" tag="li" :to="{name:'HomePage'}" style="text-decoration: none">
          <a href="javascript:void(0)" class="nav-link">Home</a>
        </router-link>
        <router-link class="nav-item" tag="li" :to="{name:'About'}" style="text-decoration: none">
          <a href="javascript:void(0)" class="nav-link">About</a>
        </router-link>
      </ul>
      <ul class="navbar-nav px-3" :class="logoutClass">
        <li class="nav-item">
          <a @click.prevent="logout" href="javascript:void(0)" class="nav-link"> Logout </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default{
  methods:{
    logout(){
      // this.$store.commit('clearToken')
      this.$store.dispatch('logout')
    }
  },
  computed:{
    logoutClass(){
      return{
        'd-none': !this.$store.getters.isAuthenticated
      }
    }
  }
}
</script>