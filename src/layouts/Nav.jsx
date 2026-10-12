import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        PetCare <i class="fa-solid fa-paw"></i>
      </div>
      <ul>
        <li>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services" className="nav-link">Services</NavLink>
        </li>
        <li>
          <NavLink to="/caregivers" className="nav-link">Caregivers</NavLink>
        </li>
        <li>
          <NavLink to="/businesses" className="nav-link">Businesses</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        {/* <li>
          <Link to="/login">Login/</Link><Link to="/signup">Sign up</Link>
        </li> */}
      </ul>

      <div>
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign up</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
