import { Card } from "antd";
import React from "react";
import "./styles.scss";
import { types } from "shared/api";

const { Meta } = Card;

interface RenderActionsProps {
  product: types.Product;
}

interface ProductProps {
  mockImg?: string;
  product: types.Product;

  renderActions(props: RenderActionsProps): React.ReactNode[];
}

export function Product({
  mockImg = "no-image.png",
  product,
  renderActions,
}: ProductProps) {
  return (
    <Card
      className="product"
      cover={<img alt="" src={product.img || mockImg} />}
      actions={renderActions({ product })}
    >
      <Meta
        title={product.name}
        description={`Цена ${product.price} ₽ за ${product.unit}`}
      />
    </Card>
  );
}
