const API_HOST_URL = "https://cv-builder-be.herokuapp.com";

export const getProducts = async () => {
  return await fetch(`${API_HOST_URL}/products`)
    .then((res) => res.json())
    .then((data) => {
      if (data?.code === 200) {
        return data?.data;
      } else return [];
    });
};

export const getProductDetailById = async (id) => {
  return await fetch(`${API_HOST_URL}/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      if (data?.code === 200) {
        return data?.data;
      }
    });
};
