import type { Product } from "../types/product";

export const ProductCard = ({ product }: { product: Product }) => (
  <div
    className="rounded-lg p-4 bg-white"
    style={{
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    }}
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-full object-cover mb-2"
    />
    <h2 className="text-lg font-bold">{product.name}</h2>
    <p className="text-sm text-gray-600">{product.description}</p>
    <p className="text-md font-semibold mt-2">${product.price.toFixed(2)}</p>
    <span className="text-xs bg-gray-200 px-2 py-1 rounded mt-1 inline-block">
      {product.category}
    </span>
  </div>
);
