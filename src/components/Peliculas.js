import React, { useContext, useEffect } from 'react';
import {Context} from '../store/appContext'
import { Card , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';

export const Peliculas = (props) => {
    //esto ahora se destructura como actions
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.loadPeliculas();
    }, []);

    console.log(store);

    return (
        <div className="section">
            {store.peliculas.length> 0 ? store.peliculas.map((item=>
            <Card className="mx-2" style={{ width: '14rem' }}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original" +item.poster_path} />
                <Card.Body className="px-0 ">
                    <Link to={`/peliculas/`+ item.id} className="text-white" ><Card.Title>{item.title}</Card.Title></Link>
                    {/* <Button variant="primary" onClick={()=>{actions.addFavoritos()}} >Primary</Button> */}
                    <Card.Text>{item.date} vfv</Card.Text> 
                </Card.Body>
            </Card>)):null}
        </div>
    )
}

export default Peliculas;