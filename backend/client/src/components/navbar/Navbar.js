import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="navLogoLink">
          <span className="logo">Razavi Stays</span>
        </Link>
        {user ? (
          <div>
            Hello <b>{user.userName.split(" ")[0]}</b>{" "}
            <button className="navButton">Logout</button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
