import { Layout as AntLayout } from "antd";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import "./styles.scss";

const { Content, Footer } = AntLayout;

export function Layout() {
  return (
    <AntLayout className="layout">
      <Header />
      <Content className="layout-content">
        <Outlet />
      </Content>
      <Footer className="layout-footer">
        Grocery Store ©2023 Created by ns6630
      </Footer>
    </AntLayout>
  );
}
