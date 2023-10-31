import { App, Col, Row } from "antd";
import { useCategoryBySearchParam, useProductsQuery } from "shared/api";
import { Spinner } from "shared/ui";
import { ProductCard } from "../ProductCard";

export function ProductList() {
  const category = useCategoryBySearchParam();
  const { data: products, error, isLoading } = useProductsQuery(category?.id);
  const { notification } = App.useApp();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    notification.error({ message: error.message });
  }

  return (
    <Row gutter={[16, 16]}>
      {products?.map((product) => (
        <Col span={4}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}
