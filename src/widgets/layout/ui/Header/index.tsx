import { App, Layout as AntLayout, Menu, MenuProps } from "antd";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCategoriesQuery } from "shared/api";
import { Spinner } from "shared/ui";

const { Header: AntHeader } = AntLayout;

export function Header() {
  const location = useLocation();
  const [pageKey, setPageKey] = useState<string>(
    `${location.pathname}${location.search}`,
  );
  const { data, error, isLoading } = useCategoriesQuery();
  const { notification } = App.useApp();
  const navigate = useNavigate();

  const categoryItems =
    data?.map((category) => ({
      key: `/products?category=${category.id}`,
      label: category.name,
    })) || [];

  const menuItems = [
    {
      key: "/home",
      label: "Домашняя страница",
    },
    ...categoryItems,
    {
      key: "/cart",
      label: "Корзина",
    },
  ];

  const changePageHandler: MenuProps["onClick"] = (e) => {
    setPageKey(e.key);
    navigate(e.key);
  };

  if (error) {
    notification.error({ message: error.message });
  }

  return (
    <AntHeader className="layout-header">
      {isLoading && <Spinner />}
      {data && (
        <Menu
          className="layout-header__menu"
          theme="dark"
          items={menuItems}
          mode="horizontal"
          selectedKeys={[pageKey]}
          onClick={changePageHandler}
        />
      )}
    </AntHeader>
  );
}
