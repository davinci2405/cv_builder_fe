import DetailComponent from "../../src/Components/Detail";

const Detail = (props) => {
  return <DetailComponent {...props} />;
};

Detail.getInitialProps = async (ctx) => {
  const { id } = ctx?.query;
  let product = {};
  if (id) {
    product = await fetch(`https://cv-builder-duyhp.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.code === 200) {
          return data?.data;
        }
      });
  }

  return { product };
};

export default Detail;
