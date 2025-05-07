import { SearchInput } from "../components/SearchInput";
import { CategoryFilter } from "../components/CategoryFilter";
import { Pagination } from "../components/Pagination";
import { useProducts } from "../hooks/useProduct";
import { ProductCard } from "../components/productCard";

export const ProductsPage = () => {
  const {
    products,
    setSearch,
    setCategory,
    setPage,
    page,
    totalPages,
    loading,
    allCategories,
  } = useProducts();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">View & Find</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <SearchInput onChange={setSearch} />
        <CategoryFilter categories={allCategories} onChange={setCategory} />
      </div>

      <div className="masonry-grid mt-4">
        {loading ? (
          <div className="w-full flex justify-center items-center h-64">
            <p className="text-center">Loading...</p>
          </div>
        ) : (
          products.map((p) => (
            <div key={p.id} className="masonry-item">
              <ProductCard product={p} />
            </div>
          ))
        )}
      </div>

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};
