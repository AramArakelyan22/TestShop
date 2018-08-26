import React from 'react';
import { Redirect, Route, Switch, HashRouter } from 'react-router-dom';
import Cart from './compnents/Cart/Cart';
import Shipping from './compnents/Shipping/Shipping';



const Routers = () => {
  return(
    <HashRouter>
      <Switch>
        <Route   path="/cart"                                         component={Cart}/>
        <Route   path="/shipping"                                     component={Shipping}/>
        <Redirect from="/"                                            to="/cart"/>
      </Switch>
    </HashRouter>
  )
}

export default Routers