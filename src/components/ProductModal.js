import React from "react";
import { Modal, Button } from "react-bootstrap";

const ProductModal = ({ show, onHide, product, onAdd }) => {
  if (!product) return null;

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
        <Button variant="primary" onClick={() => onAdd(product)}>Add to Cart</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ProductModal;
