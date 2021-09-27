import React, { useContext, useEffect } from 'react';
import {Context} from '../store/appContext'
import { Card } from 'react-bootstrap';

export const Proximas = (props) => {
    //esto ahora se destructura como actions
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.loadProximas();
    }, []);

    console.log(store);

    return (
        <div className="section">
            {store.proximas.length> 0 ? store.proximas.map((item=>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original" +item.poster_path} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                </Card.Body>
            </Card>)):null}
        </div>
    )
}

export default Proximas;