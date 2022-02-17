<template>
  <div class="h-screen bg-slate-200 flex flex-col place-content-center">
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
          >Register</span
        >
      </div>
      <div class="h-1/2">
        <form class="flex flex-col px-20" @submit.prevent="registerSubmit">
          <div class="flex flex-col gap-y-2">
            <label
              for="register-email"
              class="text-xl text-left"
              style="
                font-family: 'Source Sans Pro', sans-serif;
                font-weight: 600;
              "
              >email</label
            >
            <input
              v-model="register.email"
              type="email"
              id="register-email"
              placeholder="Type in your email"
              class="py-1 px-2 border-b-2 border-md border-sky-200"
            />
          </div>
          <div class="flex flex-col gap-t-2 my-10">
            <label
              for="register-password"
              class="text-xl text-left"
              style="
                font-family: 'Source Sans Pro', sans-serif;
                font-weight: 600;
              "
              >Password</label
            >
            <input
              v-model="register.password"
              type="password"
              id="register-password"
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
          >Register</button>
        </form>
        <div class="mt-4 text-center">
          <router-link
            to="/login"
            class="text-center hover:underline hover:text-blue-700"
          >Have account? Login here!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      register: {}
    }
  },
  methods: {
    async registerSubmit () {
      await this.$store.dispatch('registerHandler', this.register)
    }
  }
}
</script>

<style>

</style>
