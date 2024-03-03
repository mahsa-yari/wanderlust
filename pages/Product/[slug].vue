<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Product } from "~/types/products";

const product = ref<Product | null>(null);
const route = useRoute();
const productId = route.params.slug;

async function fetchProduct() {
  product.value = await useProduct(productId);
}

onMounted(fetchProduct);
</script>

<template>
  <suspense>
    <template #default>
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
    </template>
    <template #fallback>
      <ProductSkeletonDetails />
    </template>
  </suspense>
</template>
