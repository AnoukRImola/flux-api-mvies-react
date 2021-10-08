import React, { useContext, useEffect } from 'react';
import {Context} from '../store/appContext'
import { Link } from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';
import { BsHeartFill } from 'react-icons/bs';
import Cargando from './Cargando';

export const Peliculas = (props) => {
    
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.loadPeliculas();
    }, []);

    console.log(store);

    return (
        <div className="section">
            {store.peliculas.length> 0 ? store.peliculas.map((item=>
            <div className="card border-0" style={{width: "15rem"}}>
                <img src={"https://image.tmdb.org/t/p/original" + item.poster_path} className="card-img-top" alt="..." />
                <div className="card-body px-0">
                     <Link to={"/peliculas/"+item.id}><h5 className="card-title text-white">{item.title}</h5></Link> 
                     <div className="row">
                        <div>
                             <p className="card-text text-secondary m-0">{item.release_date}</p>
                        </div>
                     </div>   
                     <div className="row">
                        <div className="col-10">
                              <p className="card-text text-warning"><StarFill className="star"/> {item.vote_average}</p>  
                        </div>
                        <div className="col-2">
                            <Link className="text-danger">
                               <BsHeartFill onClick={()=> actions.addFavoritos(item.title) }/>
                            </Link>
                        </div>
                     </div>           
                </div>
             </div>)):<Cargando/>}
        </div>
    )
}

export default Peliculas;