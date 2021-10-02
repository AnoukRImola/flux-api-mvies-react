import Proximas from './Proximas';
import Populares from './Populares';
import Carrusel from '../components/Carrusel';
import PeliCalificacion from '../components/PeliCalificacion';


const Home = () => {
  return (
    <div>
      <Carrusel />
      <div className="home">
      <h1>Mejor Calificación</h1>  
      <PeliCalificacion />
      <h1>Próximas</h1>
      <Proximas />
      <h1>Populares</h1>
      <Populares />
      </div>
    </div>
  );
};

export default Home;
