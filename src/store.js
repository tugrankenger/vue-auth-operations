import { createStore } from "vuex"

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
    login({commit, dispatch, state},authData){

    },
    logout({commit, dispatch, state}){

    }
  },
  getters:{
    getApiKey(state){
      return state.fbApiKey
    }
  }
})

export default store