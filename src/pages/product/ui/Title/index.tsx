import { Typography } from "antd";
import { useCategoryBySearchParam } from "shared/api";
import "./styles.scss";

const { Title: AntTitle } = Typography;

export function Title() {
  const category = useCategoryBySearchParam();
  const categoryName = category?.name;
  return <AntTitle className="product-page-title">{categoryName}</AntTitle>;
}
