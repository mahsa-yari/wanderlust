<script setup lang="ts">
import type { Product } from "@/types/products";

const { id, name, price, image, description, highlights } = defineProps<Product>();

</script>

<template>
  <NuxtLink :to="{ path: `/product/${id}` }" :title="name">
    <div
      class="h-[450px] rounded-lg border overflow-hidden grid grid-cols-1 gap-1 content-between cursor-pointer"
    >
      <img
        width="260"
        height="280"
        class="object-cover w-full h-[200px] md:h-[280px] skeleton"
        :src="image"
        alt="product image"
        loading="eager"
        format="webp"
        fit="outside"
        sizes="sm:200 md:260px"
      />

      <div class="flex flex-col p-2">
        <span class="text-xs md:text-sm text-color[#8590A4]">{{ name }}</span>
        <span class="text-base md:text-lg text-color[#2B2D42] line-clamp-3">
          {{ description }}
        </span>
      </div>
      <div class="p-2">
        <span class="text-xs md:text-sm text-color[#8590A4]">from </span>
        <span class="text-base md:text-lg text-color[#2B2D42]"
          >{{ price.amount }} {{ price.currency }}</span
        >
      </div>
    </div>
  </NuxtLink>
</template>
