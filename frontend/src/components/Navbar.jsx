import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">

        <Link
          className="navbar-brand fw-bold text-primary fs-3"
          to="/"
        >
          React Router App
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item mx-3">
              <Link
                className="text-dark text-decoration-none fw-semibold"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link
                className="text-dark text-decoration-none fw-semibold"
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link
                className="text-dark text-decoration-none fw-semibold"
                to="/contact"
              >
                Contact
              </Link>
            </li>

            <li className="nav-item ms-3">
              <Link
                className="btn btn-primary rounded-pill px-4"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;