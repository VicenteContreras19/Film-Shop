import { useShoppingCart } from "../context/shoppingCartContext";
import storeItems from "../data/items.json";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useQuery } from "react-query";
import axios from "axios";

type CartItemProps = {
  id: number;
  quantity: number;
};


interface SingleProduct {
  data: {
    attributes: {
      name: string
      price: number
      images: {
        data: {
            attributes: {
              url: string
            }
        }[]
      }
    }
    id: number
  }
}


export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
const {data} = useQuery({
  queryKey: ['getSingleProduct ' + id],
  queryFn: () => axios.get<SingleProduct>(import.meta.env.VITE_API_URL + "/api/films/" + id + "?populate=images").then(res => res)
})

console.log({id});

const imageUrl = import.meta.env.VITE_API_URL + data?.data.data.attributes.images.data[0].attributes.url


console.log({ data });
  if (data == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex bg-transparent align-items-center">
      <img
        src={imageUrl}
        style={{ width: "125px", height: "125px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div className="text-light">
          {data?.data.data.attributes.name}{" "}
          {quantity > 1 && (
            <span className="text-light" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-light" style={{ fontSize: ".75rem" }}>
          {formatCurrency(data?.data.data.attributes.price as number)}
        </div>
      </div>
      <div className="text-light"> {formatCurrency((data?.data.data.attributes.price as number) * quantity)} </div>
      <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(id)}>&times;</Button>
    </Stack>
  );
}
