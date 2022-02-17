<template>
  <button v-on="$listeners">{{ text }}</button>
</template>

<script>
export default {
  name: 'ReuseButton',
  props: ['text']
}
</script>

<style scoped>

</style>
