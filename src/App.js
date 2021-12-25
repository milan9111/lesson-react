import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
  
function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
            <Route path="/" element={<Header />} />
         </Routes>
         <Feedback />
         <Footer />
      </Router>
    </div>
  );
}

export default App;
