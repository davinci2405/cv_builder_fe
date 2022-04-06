import { getProductDetailById } from "../../src/Api";
import DetailComponent from "../../src/Components/Detail";

const Detail = (props) => {
  return <DetailComponent {...props} />;
};

Detail.getInitialProps = async (ctx) => {
  const { id } = ctx?.query;
  let product = {};
  if (id) {
    product = await getProductDetailById(id);
  }
  return { product };
};

export default Detail;
