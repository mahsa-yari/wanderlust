<template>
  <div
    class="relative px-2 flex items-center w-full h-12 rounded-3xl focus-within:shadow-lg bg-white overflow-hidden"
  >
    <div class="grid place-items-center h-full w-12 text-gray-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>

    <input
      class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
      type="text"
      id="search"
      placeholder="Where are you going?"
    />

    <button
      class="z-[2] flex items-center rounded-3xl bg-red-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      id="button-addon1"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      Search
    </button>
  </div>
</template>
