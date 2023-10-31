import { BASE_URL } from "./constants.ts";
import { Order } from "./types.ts";
import { fakeNetwork } from "./utils.ts";

export const createOrder = async (order: Order) => {
  await fakeNetwork();
  const response = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
