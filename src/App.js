import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import TopBar from './components/topbar';
import Footer from './components/footer';
import Home from './components/home';
import DetailPage from './components/detailPage';
import Checkout from './components/checkout';
import ConfirmPage from './components/confirmpage';

function App() {
  return (
  <BrowserRouter>
    <TopBar />
    <div style={{paddingTop: "70px"}}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detailpage/:id" component={DetailPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/confirm" component={ConfirmPage} />
      </Switch>
    </div>
    <Footer />
  </BrowserRouter>);
}

export default App;
