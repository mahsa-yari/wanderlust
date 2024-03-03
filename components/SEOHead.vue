<script setup lang="ts">
import { useRoute } from "vue-router";
import type { Product } from "~/types/products";

const { path } = useRoute();

const { name, description, image } = defineProps<Pick<Product, 'name' | 'description' | 'image'>>();

const siteName = 'Wanderlust';

</script>

<template>
  <Head>
    <Title>{{ name }}</Title>
    <Meta v-if="description" name="description" hid="description" :content="description" />
    <Meta name="image" hid="image" :content="image" />
    <Meta property="og:site_name" hid="og:site_name" :content="siteName" />
    <Meta v-if="name" property="og:title" hid="og:title" :content="name" />
    <Meta v-if="description" property="og:description" hid="og:description" :content="description" />
    <Meta property="og:image" hid="og:image" :content="image" />
  </Head>
</template>