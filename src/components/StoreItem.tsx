import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/shoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);


  return (
    <Card  className="h-100 p-5" style={{
      backgroundColor: "rgba(0, 0, 0, 0.6)", // Neutral color (white) with opacity of 0.8
      outline:"none"}}>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="fit"
        width="fit"
        style={{
          objectFit: "cover",
        }}
      />
      <Card.Body className="d-flex flex-column gap-3" style={{outline:"none"}}>
        <Card.Title style={{color: 'orange'}} className="d-flex m-0  align-items-center flex-column">
          <span className="fs-5">{name}</span>
        </Card.Title>
          <span style={{
            fontFamily: 'sans-serif'
          }} className=" text-light fs-4 text-center">{formatCurrency(price)}</span>
        <div className="">
          {quantity === 0 ? (
            <Button className="w-100 bg-danger border-danger"onClick={()=>increaseCartQuantity(id)}>Add to Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center gap-3"
                style={{ gap: ".5rem" }}
              >
                <Button className="bg-dark border-dark" onClick={()=>decreaseCartQuantity(id)}>-</Button>
                <div style={{
                  fontFamily: 'sans-serif'
                }}>
                  <span className="fs-4 text-light">{quantity} in Cart</span> 
                </div>
                <Button className="increment-decrement bg-dark border-dark" onClick={()=>increaseCartQuantity(id)}>+</Button>
              </div>
              <Button onClick={()=>removeFromCart(id)} variant="warning" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
