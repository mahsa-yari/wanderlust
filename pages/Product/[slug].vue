<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import type { Product } from "~/types/products";
import { useProduct } from "~/composables/useProduct.ts";

const product = ref<Product | null>(null);
const route = useRoute();
const productId = route.params.slug;

async function fetchProduct() {
  product.value = await useProduct(productId);
}

onMounted(fetchProduct);
</script>

<template>
  <div>
    <div v-if="product">
      <SEOHead
        :name="product.name"
        :description="product.description"
        :image="product.image"
      />
      <ProductDetails
        :id="product.id"
        :name="product.name"
        :description="product.description"
        :image="product.image"
        :price="product.price"
        :highlights="product.highlights"
      />
    </div>

    <ProductSkeletonDetails v-else />
  </div>
</template>
