import React, { useContext, useEffect } from 'react';
import {Context} from '../store/appContext'
import { Card } from 'react-bootstrap';

export const Personas = (props) => {
    //esto ahora se destructura como actions
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.loadPersonas();
    }, []);

    console.log(store);

    return (
        <div className="section">
            {store.personas.length> 0 ? store.personas.map((item=>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original" + item.profile_path} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                </Card.Body>
            </Card>)):null}
        </div>
    )
}

export default Personas;