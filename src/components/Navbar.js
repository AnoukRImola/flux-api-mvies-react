import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav d-flex justify-content-center align-items-center">
          <ul className="d-flex list-unstyled ">
        <Link to="/" style={{ textDecoration: 'none' }}><li>Inicio</li></Link> 
        <Link to="/peliculas" style={{ textDecoration: 'none' }}><li>Películas</li></Link>
        <Link to="/programas" style={{ textDecoration: 'none' }}><li>Tv Shows</li></Link>
        <Link to="personas" style={{ textDecoration: 'none' }}><li>Actores</li></Link>
          </ul>
      </div>    
  );
};

export default Navbar;
