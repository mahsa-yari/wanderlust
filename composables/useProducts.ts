import type { Product } from "@/types/products";
import { get } from "~/utils";
import { setArrayFromLocalStorage } from "~/utils";

export async function useProducts(): Promise<Product[]> {
  try {
    const response = await get("/cities");
    setArrayFromLocalStorage("products", response.slice(0, 4));
    return response;
  } catch (error) {
    console.error("Error fetching cities:", error);
    throw error;
  }
}
