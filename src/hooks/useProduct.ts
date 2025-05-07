// hooks/useProducts.ts
import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { fetchProducts } from "../services/productService";

const PAGE_SIZE = 10;

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const filtered = products.filter(
      (p) =>
        (p.name.toLowerCase().includes(lowerSearch) ||
          p.description.toLowerCase().includes(lowerSearch)) &&
        (category === "All" || p.category === category)
    );
    setFiltered(filtered);
    setPage(1); // Reset page when filters change
  }, [search, category, products]);

  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  return {
    products: paginated,
    setSearch,
    setCategory,
    setPage,
    page,
    totalPages,
    allCategories: ["All", ...new Set(products.map((p) => p.category))],
  };
};
