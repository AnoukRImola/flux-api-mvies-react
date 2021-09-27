import React, {  useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Clock, Eye, Star } from 'react-bootstrap-icons';

export const PeliculaDetalle = () => {
    const {id} = useParams();
    const [peliDetalles, setPeliDetalles] = useState({})

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d6090b4ce2a41ad46da7767f56682434`)
				.then((response) => response.json())
				.then((data) =>  setPeliDetalles(data));
    }, []);

    console.log(peliDetalles);

    return (
        <div classNameName="container p-0 mt-5" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <div className="card mb-3 border-0" style={{maxWidth: "78vw"}} >
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={"https://image.tmdb.org/t/p/original" + peliDetalles.poster_path} className="card-img-top" alt="imagen de película" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-light cardetalle">
                          <h1 className="mt-3 mb-0 font-weight-bolder">{peliDetalles.title}</h1>
                          <p className="text-secondary">{peliDetalles.tagline} </p>
                          <p><kbd>Overview</kbd></p>
                          <p>{peliDetalles.overview} </p>
                          <p><kbd>Idioma:</kbd> {peliDetalles.original_language} </p>
                          <p><kbd>Fecha de lanzamiento:</kbd> {peliDetalles.release_date} </p>
                          <p><kbd><Clock className="bi bi-clock-fill"/></kbd> {peliDetalles.runtime} </p>
                          <p><kbd><Eye className="bi bi-eye-fill"/></kbd> {peliDetalles.popularity} </p>
                          <p><kbd><Star className="bi bi-star-fill"/></kbd> {peliDetalles.vote_average} </p>
                          <div className="d-flex justify-content-end">
                           <Link to="/peliculas"> <button type="button" class="btn btn-outline-light">Atrás</button></Link>
                          </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default PeliculaDetalle;