<script setup lang="ts">
import type { Product } from "@/types/products";

const { id, name, price, image, description, highlights } =
  defineProps<Product>();
  console.log(image)
</script>

<template>
  <section class="p-2 lg:p-10">
    <h3 class="text-xs lg:text-base font-semibold color-[#283570] mb-2">
      ADVENTURE
    </h3>
    <span
      class="text-2xl lg:text-4xl font-bold color-[#283570]"
      v-for="highlight in highlights"
      :key="highlight"
    >
      {{ highlight }},
    </span>
    <h1 class="text-xs color-[#283570] mt-2">{{ name }}</h1>

    <div class="relative my-5 lg:my-10">
      <img
        width="1440"
        height="490"
        class="object-cover w-full h-[320px] lg:h-[490px] skeleton rounded-xl"
        :src="image"
        alt="banner"
        loading="eager"
        format="webp"
        fit="outside"
        sizes="sm:100vw lg:1440px"
        fetchpriority="high"
        preload
      />
      <div
        class="flex justify-between absolute left-1/2 transform -translate-x-1/2 bottom-[-40px] bg-[#F0F0F0] rounded-xl mx-auto w-10/12 sm:w-3/4 lg:w-2/4 p-4"
      >
        <div>
          <p class="text-xs color-[#283570]">From</p>
          <span class="text-base lg:text-2xl font-bold"
            >{{ price.amount }} {{ price.currency }}</span
          >
          <span class="text-xs color-[#283570]"> / Per Adult</span>
        </div>

        <button
          class="flex items-center rounded bg-[#ADB3CC] px-3 sm:px-10 py-2.5 text-xs text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg active:shadow-lg"
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Book Now
        </button>
      </div>
    </div>

    <h3 class="text-2xl font-semibold color-[#283570] mt-12 mb-4">Overview</h3>
    <p class="text-base color-[#283570]">
      {{ description }}
    </p>
  </section>
</template>
