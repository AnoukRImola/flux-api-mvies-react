import React from 'react';
import ReactDOM from 'react-dom';
//importamos estilos y JS bootstrap dentro de nuestro proyecto
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
//importamos el archivo index.css dentro de nuestro proyecto
import './assets/css/style.css'
import App from './App'
import MyContextProvider from './store/appContext'

//renderiza la app
ReactDOM.render(
  <MyContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MyContextProvider>,
  document.getElementById('root')
);

