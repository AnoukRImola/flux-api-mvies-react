import React from 'react';
import {Link} from 'react-router-dom'
import Peliculas from '../components/Peliculas';


const Demo = () => {
    //accedemos a la store
  
  return (
    <div >
   
      <Peliculas/>
      
      <br />
      <Link to="/" className="btn btn-primary">Ir a Inicio</Link>
    </div>
  );
}
 
export default Demo;