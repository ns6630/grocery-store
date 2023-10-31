import {
  MinusSquareOutlined,
  PlusSquareOutlined,
  CloseSquareOutlined,
} from "@ant-design/icons";
import { Button, Typography } from "antd";
import React from "react";
import { model as productModel } from "entities/product";
import { types } from "shared/api";

const { Text } = Typography;

interface ProductActionsProps {
  product: types.Product;
}

export function ProductActions({
  product,
}: ProductActionsProps): React.ReactNode[] {
  const { cart, incrementProduct, decrementProduct, removeProduct } =
    productModel.useShoppingCart();

  if (cart[product.id]) {
    return [
      <MinusSquareOutlined onClick={() => decrementProduct(product)} />,
      <Text>{cart[product.id].count}</Text>,
      <PlusSquareOutlined onClick={() => incrementProduct(product)} />,
      <CloseSquareOutlined onClick={() => removeProduct(product.id)} />,
    ];
  }
  return [
    <Button onClick={() => incrementProduct(product)} size="small">
      В корзину
    </Button>,
  ];
}
