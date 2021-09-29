// import { Facebook } from "react-bootstrap-icons";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return ( 
    <footer>
        <ul>
            <li>Política de privacidad</li>
            <li>Términos de uso</li>
            <li>Contacto</li>
        </ul>
        <ul>
            <li><FaFacebook/></li>
            <li><FaInstagramSquare/></li>
            <li><FaYoutube/></li>
        </ul>
        <p className="text-center">Made By Anouk</p>
    </footer> 
    );
}
 
export default Footer;