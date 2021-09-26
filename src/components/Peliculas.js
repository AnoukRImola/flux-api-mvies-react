import React, { useContext, useEffect } from 'react';
import {Context} from '../store/appContext'
import { Card, Button } from 'react-bootstrap';

export const Peliculas = (props) => {
    //esto ahora se destructura como actions
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.loadPeliculas();
    }, []);

    console.log(store);

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{store.peliculas.length> 0 ? store.peliculas.map((item=><p>{item.title}</p>)):null}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
</Card>
        </div>
    )
}

export default Peliculas;