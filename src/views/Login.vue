<template>
  <div>
    <div class="h-screen w-screen bg-slate-200 flex flex-col place-content-center">
      <div
        class="
          h-3/4
          w-1/3
          bg-white
          place-self-center
          rounded-xl
          flex flex-col
          gap-y-2
          shadow-2xl
        "
      >
        <div class="mt-8 h-1/6 flex flex-col place-content-center">
          <span
            class="text-center text-4xl text-stone-800"
            style="font-family: 'Montserrat', sans-serif; font-weight: 800"
            >Login to your account</span
          >
        </div>
        <div class="h-1/2">
          <form class="flex flex-col px-20" @submit.prevent="loginSubmit">
            <div class="flex flex-col gap-y-2">
              <label
                for="login-email"
                class="text-xl text-left"
                style="
                  font-family: 'Source Sans Pro', sans-serif;
                  font-weight: 600;
                "
                >email</label
              >
              <input
                v-model="login.email"
                type="email"
                id="login-email"
                placeholder="Type in your email"
                class="py-1 px-2 border-b-2 border-md border-sky-200"
              />
            </div>
            <div class="flex flex-col gap-t-2 my-10">
              <label
                for="login-password"
                class="text-xl text-left"
                style="
                  font-family: 'Source Sans Pro', sans-serif;
                  font-weight: 600;
                "
                >Password</label
              >
              <input
                v-model="login.password"
                type="password"
                id="login-password"
                placeholder="Type in your password"
                class="py-1 px-2 border-b-2 border-md border-sky-200"
              />
            </div>
            <button
              class="
                mt-4
                py-4
                bg-sky-500
                rounded-full
                text-xl
                font-semibold
                text-white
              "
            > Log In
            </button>
          </form>
          <div class="mt-3 text-center">
            <router-link to="/register"
              class="text-center hover:underline hover:text-blue-700"
            >
            Don't have account? Register here!
            </router-link>
          </div>
          <div class="mt-8 text-center">
            <p>Or</p>
          </div>
          <div class="mt-8 flex flex-col jusitfy-center">
            <GoogleLogin
              class="btn btn-primary self-center"
              :params="params"
              :renderParams="renderParams"
              :onSuccess="onSuccess"
              :onFailure="onFailure"
            ></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login'
// import Swal from 'sweetalert2'

export default {
  name: 'Login',
  components: {
    GoogleLogin
  },
  data () {
    return {
      login: {},
      renderParams: {
        width: 230,
        height: 50,
        longtitle: true
      },
      params: {
        client_id:
          '369972256827-aabsb84t9ultj32em42jd7ngl1m9g04p.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    async loginSubmit () {
      try {
        console.log(this.login)
        this.$store.dispatch('logInHandler', this.login)
        await this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    async onSuccess (googleUser) {
      try {
        this.$store.dispatch('loginGoogleHandler', googleUser)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
</style>
