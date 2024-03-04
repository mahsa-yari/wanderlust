<script setup lang="ts">
const { products, error, isLoading } = useProducts();
</script>

<template>
  <div
    v-if="isLoading"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 px-16"
  >
    <HomeProductListSkeletonItem v-for="item in 4" :key="item" />
  </div>
  <div v-else-if="error">
    <p class="text-2xl text-center mt-10">
      {{ error }}
    </p>
  </div>
  <div v-else-if="!products">
    <p class="text-3xl text-center my-10">Product not found.</p>
  </div>
  <div
    v-else
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 px-16"
  >
    <HomeProductListItem
      v-for="product in products.slice(0, 4)"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :price="product.price"
      :image="product.image"
      :description="product.description"
      :highlights="product.highlights"
    />
  </div>
</template>
