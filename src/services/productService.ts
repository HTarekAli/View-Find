import axios from "axios";
import type { Product } from "../types/product";

const API_URL = "http://localhost:3000/products";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(API_URL);
  return response.data;
};
