<script setup lang="ts">
import type { Product } from "@/types/products";
import { onMounted, ref } from "vue";
import { useProducts } from "~/composables/useProducts";

const products = ref<Product[]>([]);
const isLoading = ref(true);
const error = ref();

async function fetchProducts() {
  try {
    isLoading.value = true;
    products.value = await useProducts();
    isLoading.value = false;
  } catch (err) {
    error.value = err;
    isLoading.value = false;
  }
}

onMounted(fetchProducts);
</script>

<template>
  <div
    v-if="isLoading"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 px-16"
  >
    <HomeProductListSkeletonItem v-for="item in 4" :key="item" />
  </div>
  <div v-else>
    <div v-if="error" class="text-2xl text-center mt-10">
      An error occurred while loading products.
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
  </div>
</template>
