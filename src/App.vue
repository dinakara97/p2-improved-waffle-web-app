<template>
  <div id="app" class="w-screen">
      <!-- Navbar -->
      <div id="nav w-screen">
        <div class="mx-0 w-screen">
          <div class="w-screen h-20 bg-white border-y flex justify-between">
            <div class="w-1/3 flex">
              <div class="mx-24 w-full flex items-center">
                <span
                  class="text-4xl text-slate-800"
                  style="font-family: 'Roboto Condensed', sans-serif"
                  >LUIS PITON</span
                >
              </div>
            </div>
            <div class="h-full w-1/2 flex flex-row">
              <div class="w-7/12 flex justify-start gap-x-4">
                <div class="w-1/3 flex items-center justify-center">
                  <router-link to="/"
                    class="
                      py-5
                      text-4xl
                      h-full
                      border-b-0
                      hover:border-b-2 hover:border-black
                    "
                    style="
                      font-family: 'Roboto Condensed', sans-serif;
                      font-family: 'Teko', sans-serif;
                    "
                  >
                    PRODUCTS
                  </router-link>
                </div>
                <div class="w-1/3 flex items-center justify-center">
                  <router-link to="/wishlist"
                    class="
                      py-5
                      text-4xl
                      h-full
                      border-b-0
                      hover:border-b-2 hover:border-black
                    "
                    style="
                      font-family: 'Roboto Condensed', sans-serif;
                      font-family: 'Teko', sans-serif;
                    "
                  >
                    WISHLIST
                  </router-link>
                </div>
                <div class="w-1/3 flex items-center justify-center">
                  <router-link to="/logout"
                    v-if="isLoggedIn"
                    class="
                      ml-8
                      py-5
                      text-4xl
                      h-full
                      border-b-0
                      hover:border-b-2 hover:border-black
                    "
                    style="
                      font-family: 'Roboto Condensed', sans-serif;
                      font-family: 'Teko', sans-serif;
                    "
                  >
                    LOG OUT
                  </router-link>
                </div>
              </div>
              <div v-if="!isLoggedIn" class="mx-24 w-1/2 flex flex-row">
                <div
                  class="
                    w-4/5
                    h-full
                    grid grid-col
                    justify-items-end
                    content-center
                  "
                >
                  <router-link to="/login"
                    v-if="!isLoggedIn"
                    class="
                      ml-8
                      py-5
                      text-4xl
                      h-full
                      border-b-0
                      hover:border-b-2 hover:border-black
                    "
                    style="
                      font-family: 'Roboto Condensed', sans-serif;
                      font-family: 'Teko', sans-serif;
                    "
                  >
                    LOG IN
                  </router-link>
                </div>
              </div>
              <div v-if="isLoggedIn" class="mx-24 w-1/2 flex flex-row">
                <div
                  class="
                    w-4/5
                    h-full
                    grid grid-col
                    justify-items-end
                    content-center
                  "
                >
                  <p
                    class="text-xl text-slate-800"
                    style="
                      font-family: 'Montserrat', sans-serif;
                      font-weight: 600;
                    "
                  > {{ user.email }}
                  </p>
                </div>
                <div
                  class="w-1/3 flex place-content-center justify-items-start"
                >
                  <img
                    src="https://painrehabproducts.com/wp-content/uploads/2014/10/facebook-default-no-profile-pic.jpg"
                    alt=""
                    class="rounded-full h-12 self-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['isLoggedIn', 'user'])
  },
  created () {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      this.$store.commit('CHANGE_LOGGED_IN_STATE', true)
      this.$store.dispatch('fetchCategories')
      this.$store.dispatch('fetchProducts')
    } else {
      this.$store.commit('CHANGE_LOGGED_IN_STATE', false)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
