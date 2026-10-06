import { Link } from "react-router-dom"
import "./nav.css"

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        PetCare <i class="fa-solid fa-paw"></i>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
        <li>
          <Link to="/caregivers">Caregivers</Link>
        </li>
        <li>
          <Link to="/businesses">Businesses</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        {/* <li>
          <Link to="/login">Login/</Link><Link to="/signup">Sign up</Link>
        </li> */}
      </ul>

      <div>
        <Link to="/login">Login/</Link><Link to="/signup">Sign up</Link>
      </div>
    </div>
  )
}

export default Nav