import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return ( 
    <footer>
        <ul>
            <li><a href="">Política de privacidad</a></li>
            <li><a href="">Términos de uso</a></li> 
            <li><a href="">Contacto</a></li>
        </ul>
        <ul>
            <li><a href=""><FaFacebook/></a></li>
            <li><a href=""><FaInstagramSquare/></a></li>
            <li><a href=""><FaYoutube/></a></li>
        </ul>
        <p className="text-center">Made By Anouk</p>
    </footer> 
    );
}
 
export default Footer;