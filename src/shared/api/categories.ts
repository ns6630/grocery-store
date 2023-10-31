import { BASE_URL } from "./constants.ts";
import { Category } from "./types.ts";
import { fakeNetwork } from "./utils.ts";

export const fetchCategories = async (): Promise<Category[]> => {
  await fakeNetwork();
  const response = await fetch(`${BASE_URL}/categories`);
  if (!response.ok)
    throw new Error("Не удалось получить список категорий товаров");
  return response.json();
};
