import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import ProductsGallery from './components/ProductsGallery/ProductsGallery';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Benefits from './components/Benefits/Benefits';
import Advantages from './components/Advantages/Advantages';

function App () {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Header /> } />
        </Routes>
        <Advantages />
        <Benefits />
        <ProductsGallery />
        <Feedback />
        <Footer />
      </Router>
    </div>
  );
}

export default App;