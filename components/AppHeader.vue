<script setup lang="ts">
const headerLinks: any = [
  {
    title: "Experience Category",
    to: "/",
  },
  {
    title: "Discover UAE",
    to: "/",
  },
  {
    title: "About us",
    to: "/",
  },
];
</script>

<template>
  <header class="flex content-center justify-between h-16 lg:px-48 px-2 shadow-md">
    <nav class="flex items-center text-center gap-2 md:gap-10">
      <NuxtLink to="/">
        <img src="~/assets/icons/logo.svg" alt="Logo" height="30" width="89" />
      </NuxtLink>
      <NuxtLink
        v-for="link in headerLinks"
        :key="link.title"
        class="text-xs md:text-base text-[#2B2D42] transition ease-in-out delay-75 hover:scale-110 duration-300"
        :to="link.to"
        >{{ link.title }}</NuxtLink
      >
    </nav>
    <img src="~/assets/icons/user.svg" alt="user" class="ml-8" />
  </header>
</template>
