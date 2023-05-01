import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import ContactUs from './Component/ContactUs'
import AboutUs from './Component/AboutUs';
import Home from './Component/Home';
import Services from './Component/Services';
import Rendering from './Component/Rendering';
import Books from './Component/Books';
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

          </Routes>
       </Router> 
    </>
  );
}

export default App;
