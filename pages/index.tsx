import ProductsComponent from "../src/Components/Products";

const Home = (props) => {
  return <ProductsComponent {...props} />;
};

Home.getInitialProps = async (ctx) => {
  let product = await fetch("https://cv-builder-duyhp.herokuapp.com/products")
    .then((res) => res.json())
    .then((data) => {
      if (data?.code === 200) {
        return data?.data;
      } else return [];
    });
  return { product };
};

export default Home;
