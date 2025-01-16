import api from "./api";
const API_URL = "";

const getAllProducts = async () => {
  return await api.get(`${API_URL}/product.json`); // Use template literals to properly concatenate the URL
};

const ProductService = {
  getAllProducts,
};

export default ProductService;
