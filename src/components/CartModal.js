import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const CartModal = ({ show, onHide, cart, onUpdateQty, onRemove, onClear }) => {
  const subtotal = cart.reduce((s, i) => s + i.qty * i.price, 0);

  const handleRemove = (item) => {
    onRemove(item.id); // call parent remove function
    toast.error(`${item.title} removed from cart.`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length === 0 ? (
          <div className="alert alert-light">Your cart is empty.</div>
        ) : (
          <div className="list-group">
            {cart.map((item) => (
              <div
                key={item.id}
                className="list-group-item d-flex align-items-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="thumb me-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="fw-bold">{item.title}</div>
                      <div className="text-muted small">
                        ₹{item.price.toFixed(2)} each
                      </div>
                    </div>
                    <div>
                      <strong>₹{(item.qty * item.price).toFixed(2)}</strong>
                      <button
                        className="btn btn-link text-danger btn-sm ms-2"
                        onClick={() => handleRemove(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div
                    className="input-group input-group-sm mt-2"
                    style={{ maxWidth: "120px" }}
                  >
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => onUpdateQty(item.id, item.qty - 1)}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      className="form-control text-center"
                      value={item.qty}
                      min="1"
                      onChange={(e) =>
                        onUpdateQty(item.id, parseInt(e.target.value) || 1)
                      }
                    />
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => onUpdateQty(item.id, item.qty + 1)}
                    >
                      ＋
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <div className="me-auto">
          <strong>Subtotal: ₹{subtotal.toFixed(2)}</strong>
        </div>
        <Button
          variant="outline-danger"
          onClick={onClear}
          disabled={cart.length === 0}
        >
          Clear Cart
        </Button>
        <Button variant="success" disabled={cart.length === 0}>
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
