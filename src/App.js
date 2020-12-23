import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Cartcontextprovider, { Cartcontext } from "./Global/Cartcontext"
import Cart from "./Components/Cart"
import ProductcontextProvider from "./Global/Productcontext"
import Products from "./Components/Products"
import Notfound from "./Components/Notfound"

function App() {
  return (
    <div>
    <ProductcontextProvider>
      <Cartcontext.Provider>
      <Router>
      <Navbar />
      
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart}/>
          <Route component={Notfound}/>
        </Switch>
      </Router>
      </Cartcontext.Provider>
     </ProductcontextProvider>
    </div>
  );
}

export default App;
