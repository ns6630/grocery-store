import { Button, Flex, Form, Input } from "antd";
import { model as productModel } from "entities/product";
import { Order } from "shared/api/types.ts";
import "./styles.scss";

const { TextArea } = Input;

interface CartFormDataType {
  name: string;
  phone: string;
  address: string;
}

interface CartFormProps {
  isSubmitDisabled: boolean;

  create(order: Order): void;
}

export function CartForm({ isSubmitDisabled, create }: CartFormProps) {
  const { cart } = productModel.useShoppingCart();
  const selectedProducts: [number, number][] = Object.values(cart).map(
    ({ id, count }) => [id, count],
  );
  const [form] = Form.useForm();

  const onFinish = (values: CartFormDataType) => {
    const newValues = { ...values, products: selectedProducts };
    create(newValues);
  };

  return (
    <Form
      autoComplete="off"
      className="cart-form"
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Имя"
        name="name"
        rules={[{ required: true, message: "Пожалуйста, введите свое имя!" }]}
      >
        <Input
          maxLength={100}
          placeholder="Как нам к вам обращаться"
          showCount
        />
      </Form.Item>
      <Form.Item
        label="Номер телефона"
        name="phone"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите номер своего телефона!",
          },
        ]}
      >
        <Input
          maxLength={100}
          placeholder="Ваш контактный номер телефона"
          showCount
        />
      </Form.Item>
      <Form.Item
        label="Адрес"
        name="address"
        rules={[{ required: true, message: "Пожалуйста, введите свой адрес!" }]}
      >
        <TextArea
          className="cart-form__address"
          maxLength={255}
          placeholder="Адрес доставки"
          showCount
        />
      </Form.Item>
      <Form.Item>
        <Flex justify="center">
          <Button
            className="cart-form__submit"
            disabled={isSubmitDisabled}
            htmlType="submit"
            type="primary"
          >
            Оформить заказ
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
}
