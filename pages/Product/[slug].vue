<script setup lang="ts">
import { watch } from "vue";

const route = useRoute();
const productId = route.params.slug;

const { product, error, isLoading } = useProduct(productId);

watch(product, (newProduct) => {
  if (newProduct) {
    useHead({
      title: newProduct?.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: newProduct?.description,
        },
        {
          name: "image",
          hid: "image",
          content: newProduct?.image,
        },
      ],
    });
  }
});
</script>

<template>
  <div v-if="isLoading">
    <ProductSkeletonDetails />
  </div>
  <div v-else-if="error">
    <p class="text-3xl text-center my-10">
      An error occurred: {{ error.message }}
    </p>
  </div>
  <div v-else-if="!product">
    <p class="text-3xl text-center my-10">Product not found.</p>
  </div>
  <div v-else>
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
