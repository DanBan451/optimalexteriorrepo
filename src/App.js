import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Main from './pages/main';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
// import {HashRouter as Router} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
      <Routes>              
        <Route path="/services" element={<Services/>} />        
        <Route path="/about" element={<About />} />        
        <Route path="/contact" element={<Contact />} />                        
        <Route path="/" element={<Main />} />  
      </Routes>   
    </BrowserRouter>        
  );
}

export default App;
