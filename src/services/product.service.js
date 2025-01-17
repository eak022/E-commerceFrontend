import api from "./api";
const API_URL = import.meta.env.VITE_BASE_URL + "/product";

const getAllProducts = async () => {
  return await api.get(API_URL);
  console.log(getAllProducts);
};

const ProductService = {
  getAllProducts,
};

export default ProductService;
