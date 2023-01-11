import { createStore } from "vuex"
import axios from "axios"
import router from './router'

const store = createStore({
  state:{
    token:'',
    fbApiKey: "AIzaSyB5ID4xTQPKqt4KgvBQKGUdSiWNdss782A",
  },
  mutations:{
    setToken(state,token){
      state.token = token
    },
    clearToken(state){
      state.token = ''
    }
  },
  actions:{
    initAuth({commit,dispatch, state}){
      commit('setToken', localStorage.getItem('token') == null ? '' : localStorage.getItem('token'))
    },
    login({commit, dispatch, state},authData){
      let apiKey = store.getters.getApiKey
        let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
        if(authData.isUser){
          authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
        }
        return axios.post(`${authLink}${apiKey}`,authData.payload).then((res)=>{
          console.log(res)
          commit('setToken',res.data.idToken)
          localStorage.setItem('token', res.data.idToken)
          dispatch('setTimeoutTimer', +res.data.expiresIn)
        }).catch(err=>{
          alert(err.response.data.error.message)
          console.log(err.response.data.error.message)
        })
    },
    setTimeoutTimer({dispatch},expiresIn){
      setTimeout(()=>{
        dispatch('logout')
      },expiresIn)
    },
    logout({commit, dispatch, state}){
      commit('clearToken')
      localStorage.removeItem('token')
      router.push({name:'Auth'})
    }
  },
  getters:{
    getApiKey(state){
      return state.fbApiKey
    },
    isAuthenticated(state){
      return state.token !== ''
    }
  }
})

export default store