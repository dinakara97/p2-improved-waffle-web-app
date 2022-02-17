import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import router from '../router'
// import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    ORIGIN: 'https://phase2-challenge1-agyadnkr.herokuapp.com/',
    user: {
      email: localStorage.getItem('userEmail')
    },
    productList: [],
    productDetail: {},
    wishList: [],
    categories: []
  },
  mutations: {
    CHANGE_LOGGED_IN_STATE (state, payload) {
      state.isLoggedIn = payload
    },
    INSERT_PRODUCTS (state, payload) {
      state.products = payload
    },
    INSERT_CATEGORIES (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    async logInHandler ({ state, commit, dispatch }, payload) {
      try {
        const result = await axios({
          method: 'POST',
          url: `${state.ORIGIN}/login`,
          data: payload
        })
        console.log(result)
        localStorage.setItem('access_token', result.data.access_token)
        localStorage.setItem('userId', result.data.id)
        localStorage.setItem('userEmail', result.data.email)
        localStorage.setItem('userRole', result.data.role)
        dispatch('fetchProducts')
        dispatch('fetchCategories')
        commit.CHANGE_LOGGED_IN_STATE(true)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
      }
    },
    async fetchCategories ({ state, commit }) {
      try {
        const result = await axios.get(`${state.ORIGIN}/pub/categories`)
        console.log(result.data)
        commit('INSERT_CATEGORIES', result.data)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
      }
    },
    async fetchProducts ({ state, commit }) {
      try {
        const result = await axios.get(`${state.ORIGIN}/pub/products`)
        console.log(result.data)
        commit('INSERT_PRODUCTS', result.data)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
      }
    },
    async loginGoogleHandler ({ state, commit, dispatch }, googleUser) {
      try {
        const token = googleUser.getAuthResponse().id_token
        await axios.post(`${state.ORIGIN}/login/google`, { token })
          .then((res) => {
            console.log(res)
            localStorage.setItem('access_token', res.data.access_token)
            localStorage.setItem('userId', res.data.id)
            localStorage.setItem('userEmail', res.data.email)
            localStorage.setItem('userRole', res.data.role)
            commit.CHANGE_LOGGED_IN_STATE(true)
            dispatch('fetchProducts')
            dispatch('fetchCategories')
            this.$router.push('/')
          })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response
        })
      }
    },
    async registerHandler ({ state, commit, dispatch }, payload) {
      try {
        await axios({
          method: 'POST',
          url: `${state.ORIGIN}/register`,
          data: payload
        })

        router.push('Login')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
      }
    }
  },
  modules: {
  }
})
