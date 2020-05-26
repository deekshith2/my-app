import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nvbar from './components/Nvbar';
import Crds from './components/Crd';
import Signup from './components/Signup';
import Login from './components/Login';
import Tabls from './components/Tabls';
import {BrowserRouter,Switch,Route,} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div>
      <Nvbar />
      <Switch>
        <Route path='/' exact  component={Crds}/>
        <Route path='/Login' exact component={Login}/>
        <Route path='/Signup' exact component={Signup}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
