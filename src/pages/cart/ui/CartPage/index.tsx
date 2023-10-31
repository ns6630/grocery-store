import { Divider, Typography } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cart } from "widgets/cart";
import { CartForm } from "features/cart";
import { model as productModel } from "entities/product";
import { useCreateOrder } from "shared/api";
import "./styles.scss";

const { Title: AntTitle } = Typography;

export function CartPage() {
  const { cart, clearCart } = productModel.useShoppingCart();
  const {
    data: order,
    isSuccess,
    isPending,
    mutate: create,
  } = useCreateOrder();
  const navigate = useNavigate();

  useEffect(() => {
    const redirectToHome = () => navigate("/");
    let timerId: number | undefined;
    if (isSuccess) {
      clearCart();
      timerId = setTimeout(() => {
        redirectToHome();
      }, 7000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isSuccess, navigate]);

  return (
    <div className="cart-page">
      <AntTitle>Корзина</AntTitle>
      <Divider />
      {isSuccess && (
        <AntTitle className="cart-page__congratulations" level={2}>
          {`Спасибо за заказ! Номер Вашего заказа: ${order.id}. Скоро с Вами свяжется наш оператор.`}
        </AntTitle>
      )}
      {!isSuccess && (
        <>
          <Cart />
          {Object.keys(cart).length > 0 && (
            <CartForm
              create={create}
              isSubmitDisabled={isSuccess || isPending}
            />
          )}
        </>
      )}
    </div>
  );
}
