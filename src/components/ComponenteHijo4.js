import React, { useContext } from 'react';
import {Context} from '../store/appContext'

const ComponenteHijo4 = () => {
      //esto ahora se destructura como actions
    const { actions } = useContext(Context)

    return (
        <div className="row px-5 py-3 mx-5 mb-2" style={{ background: "#F7FA3B" }}>
            <div className="col-lg-6">
                <h3>Componente 4</h3>
            </div>
            <div className="col-lg-6">
            {/* accedemos al objeto actions y al metodo changeColor */}
            <button style={{ background: "#F7FA12" }} onClick={() => actions.changeColor('Amarillo')} className="btn btn-primary">Cambiar</button>
            </div>
        </div>
    )
}

export default ComponenteHijo4