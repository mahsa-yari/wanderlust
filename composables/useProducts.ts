import { ref, onMounted, onUnmounted } from "vue";
import type { Product } from "@/types/products";
import { setArrayFromLocalStorage } from "~/utils";

export const useProducts = () => {
  const products = ref<Product[]>([]);
  const error = ref<Error | null>(null);
  const isLoading = ref(true);
  const abortController = new AbortController();
  const timeoutId = ref<number | null>(null);

  const fetchProducts = async () => {
    try {
      isLoading.value = true;
      const response = await fetch("https://api.mock.turpal.com/api/cities", {
        signal: abortController.signal,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      products.value = data;
      setArrayFromLocalStorage("products", data.slice(0, 4));
    } catch (err) {
      if (err.name === "AbortError") {
        error.value = new Error(
          "we can not get Data from server maybe you should Turn on your VPN"
        );
      } else {
        error.value = err;
      }
    } finally {
      isLoading.value = false;
      if (timeoutId.value !== null) {
        clearTimeout(timeoutId.value);
        timeoutId.value = null;
      }
    }
  };

  onMounted(() => {
    fetchProducts();
    timeoutId.value = window.setTimeout(() => {
      abortController.abort();
    }, 15000);
  });

  onUnmounted(() => {
    if (timeoutId.value !== null) {
      clearTimeout(timeoutId.value);
    }
    abortController.abort();
  });

  return { products, error, isLoading };
};
