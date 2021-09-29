import React, { useContext, useEffect } from 'react';
import {Context} from '../store/appContext'

export const Personas = (props) => {
    
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.loadPersonas();
    }, []);

    console.log(store);

    return (
        <div className="section">
            {store.personas.length> 0 ? store.personas.map((item=>
            <div className="card border-0" style={{width: "15rem"}}>
                <img src={"https://image.tmdb.org/t/p/original" + item.profile_path} className="card-img-top" alt="..." />
                <div className="card-body px-0">
                    <h5 className="card-title text-white">{item.name}</h5>
                </div>
            </div>)):null}
        </div>
    )
}

export default Personas;