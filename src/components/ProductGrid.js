import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onAdd, onDetails }) => {
  if (products.length === 0) {
    return (
      <div className="col-12">
        <div className="alert alert-secondary mb-0">No games found.</div>
      </div>
    );
  }
  return (
    <>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onAdd={onAdd}
          onDetails={onDetails}
        />
      ))}
    </>
  );
};
export default ProductGrid;
