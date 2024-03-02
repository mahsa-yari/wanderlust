<template>
  <div class="relative mx-auto">
    <img
      width="1440"
      height="590"
      class="object-cover w-full h-[420px] lg:h-[590px] skeleton"
      src="/images/banner.png"
      alt="banner"
      loading="eager"
      format="webp"
      fit="outside"
      sizes="sm:100vw lg:1440px"
      fetchpriority="high"
      preload
    />
    <div
      class="absolute inset-0 flex flex-col items-center pt-10 lg:pt-16 pb-16 lg:pb-32 px-2"
    >
      <h1
        class="text-3xl font-bold md:text-4xl lg:text-6xl lg:font-extrabold mb-4 lg:mb-8 text-center"
      >
        <span>Explore UAE's Top </span>
        <span class="text-red-600">Tours & Activities</span>
      </h1>
      <HomeSearch class="w-full sm:w-3/4 lg:w-2/4 my-auto"/>
    </div>
  </div>
</template>
