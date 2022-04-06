import { getProducts } from "../src/Api";
import ProductsComponent from "../src/Components/Products";

const Home = (props) => {
  return <ProductsComponent {...props} />;
};

Home.getInitialProps = async (ctx) => {
  let product = await getProducts();
  return { product };
};

export default Home;
