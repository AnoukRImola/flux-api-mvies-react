import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./views/Home"
import Demo from "./views/Demo"
import Peliculas from './components/Peliculas';
import Programas from './components/Programas';
import Personas from './components/Personas';
import PeliculaDetalle from './components/PeliculaDetalle';
import ProgramaDetalle from './components/ProgramaDetalle';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  
  return (
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/demo">
          <Demo/>
        </Route>
        <Route exact path="/peliculas">
          <Peliculas/>
        </Route>
        <Route exact path="/peliculas/:id">
          <PeliculaDetalle/>
        </Route>
        <Route exact path="/programas">
          <Programas/>
        </Route>
        <Route exact path="/programas/:id">
          <ProgramaDetalle/>
        </Route>
        <Route exact path="/personas">
          <Personas/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
