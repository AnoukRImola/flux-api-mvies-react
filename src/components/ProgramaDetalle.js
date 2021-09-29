import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Eye, Star } from 'react-bootstrap-icons';
import {Link} from "react-router-dom";

const ProgramaDetalle = () => {
    const {id} = useParams();
    const [programaDetalles, setProgramaDetalles] = useState({});

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=d6090b4ce2a41ad46da7767f56682434`)
        .then(response => response.json())
        .then(data =>  {setProgramaDetalles(data)});
    },[]);    

    console.log(programaDetalles);
    
    return ( 
        <div classNameName="container p-0 mt-5" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <div className="card mb-3 border-0" style={{maxWidth: "78vw"}} >
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={"https://image.tmdb.org/t/p/original" + programaDetalles.poster_path} className="card-img-top" alt="imagen de película" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-light cardetalle">
                          <h1 className="mt-3 mb-0 font-weight-bolder">{programaDetalles.original_name}</h1>
                          <p className="text-secondary">{programaDetalles.tagline} </p>
                          <p><kbd>Overview</kbd></p>
                          <p>{programaDetalles.overview} </p>
                          <p><kbd>Idioma:</kbd> {programaDetalles.original_language} </p>
                          <p><kbd>Primer episodio al aire:</kbd> {programaDetalles.first_air_date} </p>
                          <p><kbd>Último episodio al aire:</kbd> {programaDetalles.last_air_date} </p>
                          <p><kbd>Temporadas:</kbd> {programaDetalles.number_of_seasons} </p>
                          <p><kbd>Episodios:</kbd> {programaDetalles.number_of_episodes} </p>
                          <p><kbd><Eye className="bi bi-eye-fill"/></kbd> {programaDetalles.vote_count} </p>
                          <p><kbd><Star className="bi bi-star-fill"/></kbd> {programaDetalles.vote_average} </p>
                          <div className="d-flex justify-content-end">
                           <Link to="/programas"> <button type="button" class="btn btn-outline-light">Atrás</button></Link>
                          </div>
                        </div>
                    </div>
               </div>
            </div> 
        </div>
     );
}

export default ProgramaDetalle;