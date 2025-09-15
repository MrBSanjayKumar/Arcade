const Navbar = ({ cartCount, onCartOpen }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">🎮 ArcadeCart</a>
        <button className="btn btn-outline-light" onClick={onCartOpen}>
          🛒 Cart <span className="badge bg-danger ms-1">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
