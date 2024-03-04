<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Product } from "~/types/products";

const product = ref<Product | null>(null);
const route = useRoute();
const productId = route.params.slug;

async function fetchProduct() {
  product.value = await useProduct(productId);
  useHead({
    title: product.value?.name,
    meta: [
      {
        hid: "description",
        name: "description",
        content: product.value?.description,
      },
      {
        name: "image",
        hid: "image",
        content: product.value?.image,
      },
    ],
  });
}

onMounted(fetchProduct);
</script>

<template>
  <div v-if="product">
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
</template>
