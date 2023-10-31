import { produce } from "immer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { types } from "shared/api";

interface CountedProduct extends types.Product {
  count: number;
}

interface ShoppingCartState {
  cart: Record<number, CountedProduct>;

  incrementProduct(product: types.Product): void;

  decrementProduct(product: types.Product): void;

  removeProduct(id: number): void;
}

export const useShoppingCart = create<ShoppingCartState>()(
  devtools((set) => ({
    cart: {},
    incrementProduct: (product: types.Product) =>
      set(
        (state) =>
          produce(state, (draftState) => {
            if (draftState.cart[product.id]) {
              draftState.cart[product.id].count += 1;
            } else {
              draftState.cart[product.id] = { ...product, count: 1 };
            }
          }),
        false,
        { type: "shoppingCart/incrementProduct", product },
      ),
    decrementProduct: (product: types.Product) =>
      set(
        (state) =>
          produce(state, (draftState) => {
            const count = draftState.cart[product.id]?.count;
            if (count > 1) {
              draftState.cart[product.id].count -= 1;
            } else {
              delete draftState.cart[product.id];
            }
          }),
        false,
        { type: "shoppingCart/decrementProduct", product },
      ),
    removeProduct: (id: number) =>
      set(
        (state) =>
          produce(state, (draftState) => {
            delete draftState.cart[id];
          }),
        false,
        { type: "shoppingCart/removeProduct", id },
      ),
  })),
);
