import React from 'react'
import {Login} from './Pages/Login';
import {Register} from './Pages/Register';
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Drink from "./Pages/Drink";
import Popup from "./components/Popup";
import PopupLogin from "./components/PopupLogin"
import PopupRegister from "./components/PopupRegister"

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/drink' element={<Drink />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/popup' element={<Popup />} />
        <Route path='/popuplogin' element={<PopupLogin />} />
        <Route path='/popupregister' element={<PopupRegister />} />
      </Routes>

    </div>
  );
}

export default App;
