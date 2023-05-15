import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";
import { useEffect } from "react";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {

  const { closeCart, cartItems } = useShoppingCart();
useEffect(() => {
console.log(cartItems);

}, [cartItems])
  return (
    <Offcanvas  show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header className="bg-dark" closeButton>
        <Offcanvas.Title className="text-light"> Cart </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="bg-dark">
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem  key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5 text-light">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
