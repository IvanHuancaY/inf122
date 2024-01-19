
import './App.css';
import React from 'react';
import Login from './components/Login';
import Perfil from './components/Perfil.js'
import Registro from './components/Registro.js';
import NavBar from './components/Navbar.js';

import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return(
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path='/' exact element={<NavBar />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registro' element={<Registro />} />            
            <Route path='/perfil' element={<Perfil />} />  
          </Routes>
        </div>
      </Router>
  </div>
  );
}

export default App;
