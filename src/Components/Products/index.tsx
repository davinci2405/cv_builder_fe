import { addToCart, getTotals } from "../../Redux/action";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fakeDataProducts } from "./fakeData";

const ProductsComponent = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const [products, setProducts] = useState(product || []);
  const [cartTotalItem, setCartTotalItem] = useState(0);
  const cart = useSelector((state: RootStateOrAny) => state?.cart);

  useEffect(() => {
    dispatch(getTotals());
    setCartTotalItem(cart?.cartTotalItem);
  }, [cart, dispatch]);

  const handledAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 my-8 max-w-screen-lg mx-auto flex">
        <div className="w-full">
          <div className="flex justify-end">
            <Link href="/general/cart" passHref>
              <button className="p-2 bg-red-400">Cart - {cartTotalItem}</button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {products?.map((e, index) => (
              <div key={index} className="w-full flex items-center">
                <Link href={`/general/detail?id=${e?._id}`} passHref>
                  <div className="text-center space-y-2 pr-4 cursor-pointer">
                    <img src={e?.image} alt="" width={200} />
                    <div>{e?.title}</div>
                  </div>
                </Link>
                <div className="space-y-2">
                  <p>{e?.category}</p>
                  <p>{e?.description}</p>
                  <p>${e?.price}</p>
                  <button className="bg-red-400 p-1 min-w-max" onClick={() => handledAddToCart(e)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
