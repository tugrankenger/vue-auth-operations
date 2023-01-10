<template>
  <div class="container">
    <div class="row my-5 justify-content-center">
      <div class="col-6 card card-primary p-3 border" :class="{'border-primary': isUser, 'border-success': !isUser}">
        <h3 class="text-center my-3" :class="{'text-primary':isUser, 'text-success': !isUser}">Vuejs Auth Operations</h3>
        <hr>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label>Email</label>
            <input v-model="user.email" type="email" class="form-control" placeholder="Enter your email">
          </div>
          <div class="form-group mt-3">
            <label>Password</label>
            <input v-model="user.password" type="password" class="form-control" placeholder="Enter your password">
          </div>
          <div class="button-container d-flex flex-column align-items-center">
            <button type="submit" class="btn btn-block my-2" :class="{'btn-primary':isUser, 'btn-success': !isUser}">
              {{ isUser? 'Login': 'Register' }}
            </button>
            <a href="javascirpt:void(0)" @click.prevent="isUser = !isUser">
              {{ isUser? 'I am not a member': 'I am a member' }}
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default{
    data(){
      return{
        user:{
          email:null,
          password: null
        },
        isUser:false
      }
    },
    methods:{
      onSubmit(){
        let apiKey = this.$store.getters.getApiKey
        let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
        if(this.isUser){
          authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
        }
        let payload = {
          email: this.user.email,
          password: this.user.password,
          returnSecureToken: true
        }
        axios.post(`${authLink}${apiKey}`,payload).then((res)=>{
          console.log(res)
        }).catch(err=>{
          alert(err.response.data.error.message)
          console.log(err.response.data.error.message)
        })
      }
    }
  }
</script>