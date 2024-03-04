import { ref, onMounted } from "vue";
import type { Product } from "@/types/products";
import { get, setArrayFromLocalStorage } from "~/utils";

export const useProducts = () => {
  const products = ref<Product[]>([]);
 const error = ref<Error | null>(null);
 const isLoading = ref(true);

 const fetchProducts = async () => {
    try {
      isLoading.value = true;
      const response = await get("/cities");
      products.value = response;
      setArrayFromLocalStorage("products", response.slice(0, 4));
    } catch (err) {
      console.error('Error fetching products:', err);
      error.value = err;
    } finally {
      isLoading.value = false;
    }
 };

 onMounted(fetchProducts);

 return { products, error, isLoading };
}
