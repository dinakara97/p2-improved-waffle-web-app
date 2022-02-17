<template>
  <div>
    <div class="p-10">
      <div class="w-1/3 rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="product.imgUrl">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ product.name }}</div>
          <p class="text-gray-700 text-base">
          {{ product.price }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ product.Category.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['product'],
  currencyProcess (data) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(data)
  }
}
</script>

<style>

</style>
