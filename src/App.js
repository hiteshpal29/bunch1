import React from "react";
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import Home from './Components/home'
import ContactUs from "./Components/contact";
import "./App.css";
import Menus from "./Components/Menus";
import  Events from './Components/Events'
import Login from './Components/Login'
import Signup from "./Components/Signup";
function App() {
  return (
    <>
   
   <BrowserRouter>
      <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menus
           />} />
           <Route path="events"  element={<Events/>}  />
           <Route path="login" element={<Login />} />
           <Route path="signup" element={<Signup />} />

          <Route path="contact" element={<ContactUs />} />
     
      </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
