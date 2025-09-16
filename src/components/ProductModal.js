import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify"; // import toast

const ProductModal = ({ show, onHide, product, onAdd }) => {
  if (!product) return null;

  const handleAddToCart = () => {
    onAdd(product); // call the parent function to add item
    toast.success(`${product.title} added to cart! 🛒`, {
      position: "bottom-right",
      autoClose: 2000, // 2 sec
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    onHide(); // close modal after adding
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={product.img}
          alt={product.title}
          className="img-fluid mb-3"
        />
        <p className="mb-1"><strong>Genre:</strong> {product.genre}</p>
        <p className="mb-1"><strong>Price:</strong> ₹{product.price.toFixed(2)}</p>
        <p>{product.desc}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
