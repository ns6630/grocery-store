import { App, ConfigProvider } from "antd";
import ruRU from "antd/locale/ru_RU";
import React from "react";

interface AntConfigProps {
  children: React.ReactNode;
}

export function AntConfigProvider({ children }: AntConfigProps) {
  return (
    <ConfigProvider locale={ruRU}>
      <App>{children}</App>
    </ConfigProvider>
  );
}
