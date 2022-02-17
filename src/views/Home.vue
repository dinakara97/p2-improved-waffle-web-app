<template>
  <div class="home w-full h-screen bg-red-500">
    <div class="mx-12 my-8 grid grid-cols-3">
      <Card v-for="product in productList.row"
      :key="product.id"
      :product="product"
       />
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Card
  },
  computed: {
    ...mapState(['productList'])
  }
}
</script>
