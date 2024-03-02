import { getArrayFromLocalStorage } from "~/utils";

export const useProduct = async (productId) => {
  try {
    const allProducts = await getArrayFromLocalStorage("products");
    const res = allProducts.find((item: Product) => item.id == productId) || null;
    return res
  } catch (err) {
    console.error("Error fetching product:", err);
  }
};
