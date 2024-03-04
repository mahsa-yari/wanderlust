import { ref, onMounted } from "vue";
import { getArrayFromLocalStorage } from "~/utils"; // Adjust the import path as necessary
import type { Product } from "~/types/products"; // Adjust the import path as necessary

export const useProduct = (productId: number) => {
  const product = ref<Product | null>(null);
  const error = ref<Error | null>(null);
  const isLoading = ref(true);

  const fetchProduct = async () => {
    try {
      isLoading.value = true;
      const allProducts = await getArrayFromLocalStorage("products");
      product.value =
        allProducts.find((item: Product) => item.id == productId) || null;
    } catch (err) {
      console.error("Error fetching product:", err);
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetchProduct);

  return { product, error, isLoading };
};
