import { NavLink } from "react-router-dom";
import logo from "../assets/OFG.jpg";

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-logo" end>
        <img src={logo} alt="OFG logo" />
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
      </div>
    </nav>
  );
}