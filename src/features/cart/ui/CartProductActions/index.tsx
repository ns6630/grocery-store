import {
  CloseSquareOutlined,
  MinusSquareOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";
import { model as productModel } from "entities/product";
import { types } from "shared/api";

interface CartProductActionsProps {
  product: types.Product;
}

export function CartProductActions({ product }: CartProductActionsProps) {
  const { incrementProduct, decrementProduct, removeProduct } =
    productModel.useShoppingCart();

  return (
    <Space size="middle">
      <Button
        icon={<MinusSquareOutlined />}
        onClick={() => decrementProduct(product)}
      />
      <Button
        icon={<PlusSquareOutlined />}
        onClick={() => incrementProduct(product)}
      />
      <Button
        icon={<CloseSquareOutlined />}
        onClick={() => removeProduct(product.id)}
      />
    </Space>
  );
}
