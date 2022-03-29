import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/action";

const DetailComponent = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const handledAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  if (!product) {
    return <div>Item not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 my-8 max-w-screen-lg mx-auto flex">
        <div className="w-full flex items-center">
          <div className="text-center space-y-2 pr-4">
            <img src={product?.image} alt="" width={200} />
            <div>{product?.title}</div>
          </div>
          <div className="space-y-2">
            <p>{product?.category}</p>
            <p>{product?.description}</p>
            <p>${product?.price}</p>
            <button className="bg-red-400 p-1 min-w-max" onClick={() => handledAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComponent;
