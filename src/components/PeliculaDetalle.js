import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Eye, Star } from 'react-bootstrap-icons';
import {Link} from "react-router-dom";

const PeliculaDetalle = () => {
    const {id} = useParams();
    const [peliculaDetalles, setPeliculaDetalles] = useState({});

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d6090b4ce2a41ad46da7767f56682434`)
        .then(response => response.json())
        .then(data =>  {setPeliculaDetalles(data)});
    },[]);    

    console.log(peliculaDetalles);

    return ( 
        <div classNameName="container p-0 mt-5" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <div className="card mb-3 border-0" style={{maxWidth: "78vw"}} >
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={"https://image.tmdb.org/t/p/original" + peliculaDetalles.poster_path} className="card-img-top" alt="imagen de película" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-light cardetalle">
                          <h1 className="mt-3 mb-0 font-weight-bolder">{peliculaDetalles.title}</h1>
                          <p className="text-secondary">{peliculaDetalles.tagline} </p>
                          <p><kbd>Overview</kbd></p>
                          <p>{peliculaDetalles.overview} </p>
                          <p><kbd>Idioma:</kbd> {peliculaDetalles.original_language} </p>
                          <p><kbd>Fecha de lanzamiento:</kbd> {peliculaDetalles.release_date} </p>
                          <p><kbd><Clock className="bi bi-clock-fill"/></kbd> {peliculaDetalles.runtime} </p>
                          <p><kbd><Eye className="bi bi-eye-fill"/></kbd> {peliculaDetalles.popularity} </p>
                          <p><kbd><Star className="bi bi-star-fill"/></kbd> {peliculaDetalles.vote_average} </p>
                          <div className="d-flex justify-content-end">
                           <Link to="/peliculas"> <button type="button" class="btn btn-outline-light">Atrás</button></Link>
                          </div>
                        </div>
                    </div>
               </div>
            </div>
            
        </div>
     );
}
 
export default PeliculaDetalle;