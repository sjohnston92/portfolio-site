import './App.css';
import {useState} from 'react'
import { Route, Switch } from 'react-router-dom';
import {Container} from 'react-bootstrap'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import ShowCase from "./pages/ShowCase"
import Footer from "./components/Footer"
import About from "./pages/About"




function App() {

  return (
    <>
    <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/showcase" component={ShowCase} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </Switch>
    </Container>
    <Footer/>
    </>
  );

}

export default App;
