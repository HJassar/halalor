import { Routes, Route, } from 'react-router-dom';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Pages
import Home from './pages/home';
import Results from './pages/results';

import './App.css';

import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API_URL
console.log(process.env.REACT_APP_API_URL)

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Results />} />
          <Route path='/*' element={<>404</>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
