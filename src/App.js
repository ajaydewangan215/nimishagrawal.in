import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Bio from './Bio';
import Books from './Books';
import Contact from './Contact';
import Blog from './Blog';
// import Error from './Error';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bio" component={Bio}  />
        <Route exact path="/books" component={Books}  />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/gallary" component={Blog} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
