import { Divider } from "antd";
import { ProductList } from "widgets/product";
import { Title } from "../Title";

export function ProductPage() {
  return (
    <div>
      <Title />
      <Divider />
      <ProductList />
    </div>
  );
}
