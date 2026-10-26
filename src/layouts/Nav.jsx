
import { useState } from "react"; // ADDED
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`nav ${
        location.pathname === "/"
          ? "home-nav"
          : location.pathname === "/services"
            ? "services-nav"
            : location.pathname === "/caregivers"
            ? "caregivers-nav"
            : ""
      }`}
    >
      <div
        className="logo"
        onClick={() => {
          navigate("/");
          closeMenu(); 
        }}
      >
        PetCare <i className="fa-solid fa-paw"></i>
      </div>

      
      <button
        type="button"
        className={`burger-menu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="nav-links"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      
      <ul
        id="nav-links"
        className={`nav-links ${menuOpen ? "show" : ""}`}
      >
        <li>
          <NavLink
            to="/"
            className="nav-link"
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className="nav-link"
            onClick={closeMenu}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/caregivers"
            className="nav-link"
            onClick={closeMenu}
          >
            Caregivers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/businesses"
            className="nav-link"
            onClick={closeMenu}
          >
            Businesses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="nav-link"
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>
      </ul>

      <div className="auth-links">
        <ul>
          <li>
            <NavLink
              to="/login"
              className="login"
              onClick={closeMenu}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className="signup"
              onClick={closeMenu}
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
