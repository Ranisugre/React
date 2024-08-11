import { useDispatch, useSelector } from "react-redux";
import ItemList from "./components/ItemList";
import { clearCart, removeItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = () => {
    dispatch(removeItems());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="m-2 px-2 py-2 bg-gray-800 text-white rounded-lg "
          onClick={handleCart}
        >
          clear Cart
        </button>

        <button
          className="bg-gray-800 text-white m-2 p-2 rounded-lg"
          onClick={handleRemoveItem}
        >
          Remove Item
        </button>
        {cartItem.length === 0 ? (
          <h1>cart is empty!! Add items to the cart.</h1>
        ) : (
          ""
        )}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
