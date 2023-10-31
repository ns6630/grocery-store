import { useMutation, useQuery } from "@tanstack/react-query";
import { App } from "antd";
import { useSearchParams } from "react-router-dom";
import { fetchCategories } from "./categories.ts";
import { createOrder } from "./orders.ts";
import { fetchProducts } from "./products.ts";

export const useCategoriesQuery = () => {
  return useQuery({
    queryFn: () => fetchCategories(),
    queryKey: ["categories"],
    staleTime: 1000 * 60,
  });
};

export const useProductsQuery = (categoryId?: number) => {
  return useQuery({
    queryFn: () => fetchProducts(categoryId),
    queryKey: ["products", categoryId],
    staleTime: 1000 * 60,
  });
};

export const useCategoryBySearchParam = () => {
  const [params] = useSearchParams();
  const { data: categories } = useCategoriesQuery();
  const categoryId = params.get("category");
  return categories?.find((category) => String(category.id) === categoryId);
};

export const useCreateOrder = () => {
  const { notification } = App.useApp();

  return useMutation({
    mutationFn: createOrder,
    mutationKey: ["orders", "create"],
    onSuccess: (newOrder) => {
      notification.success({
        message: `Заказ принят!`,
      });
      return newOrder;
    },
  });
};
