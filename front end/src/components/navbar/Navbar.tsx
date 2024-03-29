import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const auth = useContext(AuthContext);
  function logout() {

  }

  return (
    <nav className="navbar">
      <div>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/"> Adotar </NavLink>
        </li>
        {auth.user ? (
          <>
          <li>
            <NavLink to="/user/profile"> Profile </NavLink>
          </li>
          <li onClick={logout}>
            Sair
          </li>
        </>
        ) : (
          <>
            <li>
              <NavLink to="/login"> Entrar </NavLink>
            </li>
            <li>
              <NavLink to="/register"> Cadastrar </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
