import { ProductActions } from "features/product";
import { Product } from "entities/product";
import { types, useCategoryBySearchParam } from "shared/api";

interface ProductCardProps {
  product: types.Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const category = useCategoryBySearchParam();
  return (
    <Product
      mockImg={category?.productPlaceholder}
      product={product}
      renderActions={ProductActions}
    />
  );
}
