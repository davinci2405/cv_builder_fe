import { useEffect } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { addToCart, clearCart, decreaseCart, getTotals } from "../../Redux/action";
import Link from "next/link";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootStateOrAny) => state?.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handledClearCart = () => {
    dispatch(clearCart());
  };

  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };

  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="flex-1 my-8 max-w-screen-lg mx-auto flex">
      <div className="w-screen text-black space-y-2">
        <div className="flex justify-end">
          <Link href="/" passHref>
            <div className="p-2 bg-red-400 cursor-pointer">Products</div>
          </Link>
        </div>
        <div className="flex justify-end p-2">
          <button className="p-2 bg-red-400" onClick={() => handledClearCart()}>
            Clear Cart
          </button>
        </div>
        {cart?.cartItems?.length === 0 && <div>Cart Empty</div>}
        {cart?.cartItems?.map((e) => (
          <div className="w-full flex items-center space-x-2 pt-2" key={e?.id}>
            <div className="w-1/3 flex justify-start pl-1">{e?.title}</div>
            <div className="w-1/3 flex items-center justify-center space-x-2 pr-2">
              <div className="flex items-center space-x-2">
                <div className="h-5 w-5 bg-red-600" onClick={() => handleDecreaseCart(e)}>
                  -
                </div>
                <div className="flex items-center">{e?.cartQuantity}</div>
                <div className="h-5 w-5 bg-green-600" onClick={() => handleIncreaseCart(e)}>
                  +
                </div>
              </div>
            </div>
            <div className="w-1/3 flex justify-end">{e?.cartQuantity * e?.price}</div>
          </div>
        ))}
        {cart?.cartItems.length !== 0 && (
          <div className="border-t border-black space-y-2">
            <div className="flex items-center justify-between p-2 font-bold">
              <div>Total Price:</div>
              <div>{cart.cartTotalAmount.toFixed(2)}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
