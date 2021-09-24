import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import {Link} from 'react-router-dom'
import ComponenteHijo1 from '../components/ComponenteHijo1'
import ComponenteHijo2 from '../components/ComponenteHijo2'
import ComponenteHijo3 from '../components/ComponenteHijo3'
import ComponenteHijo4 from '../components/ComponenteHijo4';


const Demo = () => {
    //accedemos a la store
  const {store} =useContext(Context)
  return (
    <div className="container-fluid">
    <h1 className="text-center">{store.demo}</h1>
      <ComponenteHijo1/>
      <ComponenteHijo2/>
      <ComponenteHijo3/>
      <ComponenteHijo4/>
      <br />
      <Link to="/" className="btn btn-primary">Ir a Inicio</Link>
    </div>
  );
}
 
export default Demo;