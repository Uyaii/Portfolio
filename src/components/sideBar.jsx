import { Link, NavLink } from "react-router-dom";
import "../scss/sideBar.scss";
import logo from "../assets/pinkM.svg";
import logoSubtitle from "../assets/Maryanne.png";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
const SideBar = () => {

  const classNameFunc = ({ isActive }) => (isActive ? "active" : "");
  return (
    <section className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
        <img className="sub-logo" src={logoSubtitle} alt="My Name" />
      </Link>

      <nav>
        <NavLink exact="true" to="/" className={classNameFunc}>
          <FaHome color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" className="about-link" to="/about">
          <FaUser color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" className="contact-link" to="/contact">
          <FaEnvelope color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/Uyaii">
            <FaGithub color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="www.linkedin.com">
            <FaInstagram color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="www.linkedin.com">
            <FaLinkedinIn color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </section>
  );
};
export default SideBar;
