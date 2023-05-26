import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import ContactUs from './Component/ContactUs'
import AboutUs from './Component/AboutUs';
import Home from './Component/Home';
import Services from './Component/Services';
import Rendering from './Component/Rendering';
import Books from './Component/Books';
import Counter from './Component/Counter';
import FormObject from './Component/FormObject';
import FormRef from './Component/FormRef';
import ParentComp from './Component/ParentComp';
import Effect from './Component/Effect';
import EffectOne from './Component/EffectOne';
import APIUseEffect from './Component/APIUseEffect';
import Shopping from './Component/Shopping';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/render" element={<Rendering/>}/>
              <Route path="/aboutus" element={<AboutUs/>}/>
              <Route path="/books" element={<Books/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/counter" element={<Counter/>}/>
              <Route path="/formobj" element={<FormObject/>}/>
              <Route path="/formref" element={<FormRef/>}/>
              <Route path="/parentcomp" element={<ParentComp/>}/>
              <Route path="/useeffect" element={<Effect/>}/>
              <Route path="/effectone" element={<EffectOne/>}/>
              <Route path="/apiuseeffect" element={<APIUseEffect/>}/>
              <Route path="/shopping" element={<Shopping/>}/>

          </Routes>
       </Router> 
    </>
  );
}

export default App;
