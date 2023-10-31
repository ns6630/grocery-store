import { BASE_URL } from "./constants.ts";
import { Product } from "./types.ts";
import { fakeNetwork } from "./utils.ts";

export const fetchProducts = async (
  categoryId?: number,
): Promise<Product[]> => {
  if (!categoryId) {
    return [];
  }
  await fakeNetwork();
  const response = await fetch(`${BASE_URL}/products?category=${categoryId}`);
  if (!response.ok) throw new Error("Не удалось получить список продуктов");
  return response.json();
};
