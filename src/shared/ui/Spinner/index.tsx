import { Spin } from "antd";
import { clsx } from "clsx";
import "./styles.scss";

export interface SpinnerProps {
  className?: string;
}

export function Spinner({ className }: SpinnerProps) {
  return (
    <div className={clsx("spinner", className)}>
      <Spin />
    </div>
  );
}
