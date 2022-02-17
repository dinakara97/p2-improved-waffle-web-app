<template>
  <div></div>
</template>

<script>
export default {
  name: 'Logout',
  created () {
    localStorage.clear()
    this.$gAuth.signOut()
    this.$router.push('/')
    this.$store.commit('CHANGE_LOGGED_IN_STATUS', false)
  }
}
</script>
