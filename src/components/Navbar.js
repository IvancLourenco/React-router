import "./Navbar.css";

import { Link ,NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
       {/*  <Link to= "/" className={ ({ isActive }) => ( isActive ? "esta-ativo" : "nao-ativo")} >Home </Link>
        <Link to= "/about">Sobre </Link>*/}
      
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/about"> Sobre </NavLink>
    </nav>
  )
};

export default Navbar