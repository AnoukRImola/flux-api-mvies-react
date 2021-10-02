import React, { useContext, useEffect } from 'react';
import {Context} from '../store/appContext';

const PeliCalificacion = () => {

    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.loadCalificacion();
    }, []);

    console.log(store);

    return (
        <div className="section-scroll">
            <div className="scroll-container">
                 {store.calificacion.length> 0 ? store.calificacion.map((item=>
                <div className="border-0">
                    <div className="card border-0 scroll-item" style={{width: "10rem"}}>
                        <img src={"https://image.tmdb.org/t/p/original" + item.poster_path} className="card-img-top border-0" alt="..." />
                    </div>
                </div>)):null}
            </div>
        </div>
      );
}
 
export default PeliCalificacion;