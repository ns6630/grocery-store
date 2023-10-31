import { Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { CartProductActions } from "features/cart";
import { model as productModel } from "entities/product";
import { types, useCategoriesQuery } from "shared/api";
import "./styles.scss";

const { Title: AntTitle } = Typography;

type CartProduct = Omit<types.Product, "img"> & {
  count: string;
};

export function Cart() {
  const { data: categories } = useCategoriesQuery();
  const { cart } = productModel.useShoppingCart();
  const tableData = Object.values(cart).map((cartProduct) => ({
    ...cartProduct,
    key: cartProduct.id,
  }));
  const check = tableData.reduce(
    (summ, { price, count }) => summ + price * count,
    0,
  );

  if (!categories) {
    return null;
  }

  const columns: ColumnsType<CartProduct> = [
    {
      title: "Наименование товара",
      dataIndex: "name",
      key: "name",
      render: (_, { name }) => (
        <div className="cart-widget__product-name">{name}</div>
      ),
    },
    {
      title: "Цена",
      dataIndex: "price",
      key: "price",
      render: (_, { price, unit }) => `Цена ${price} ₽ за ${unit}`,
    },
    {
      title: "Количество единиц",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Действия",
      key: "action",
      render: (_, product) => <CartProductActions product={product} />,
    },
  ];

  return (
    <div className="cart-widget">
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Table columns={columns} dataSource={tableData} />
      <AntTitle level={2} className="cart-widget__check">
        Выбрано товаров на сумму: {check} ₽.
      </AntTitle>
    </div>
  );
}
