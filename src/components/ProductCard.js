import { toast } from "react-toastify";

const ProductCard = ({ product, onAdd, onDetails }) => {
  const handleAdd = () => {
    onAdd(product); // Add to cart logic
    toast.success(`${product.title} added to cart! 🛒`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card card-game h-100">
        <img
          src={product.img}
          alt={product.title}
          className="card-img-top"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title mb-1">{product.title}</h5>
          <p className="text-muted small mb-2 genre-badge">{product.genre}</p>
          <p className="card-text text-truncate mb-3">{product.desc}</p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <div className="price-badge px-2 py-1 rounded">
              ₹{product.price.toFixed(2)}
            </div>
            <div>
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => onDetails(product)}
              >
                Details
              </button>
              <button
                className="btn btn-sm btn-primary"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
