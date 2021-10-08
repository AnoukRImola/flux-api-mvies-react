import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";




const Navbar = () => {
  const {store} = useContext(Context);
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <div className="container-fluid bg-danger">
        <Link className="navbar-brand" to="/"></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-danger"></span>
        </button>
        <div className="collapse navbar-collapse bg-danger" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-light bg-danger" aria-current="page" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light bg-danger" to="/peliculas">Películas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light bg-danger" to="/programas">Tv Shows</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light bg-danger" to="/personas">Actores</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light bg-danger" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Favoritos
              </a>
              <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
              {store.favoritos.map((item=>
                <li><a className="dropdown-item text-white" >{item}</a></li>))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
