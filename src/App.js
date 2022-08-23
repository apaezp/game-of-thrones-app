import Home from './components/Home.js';
import Characters from './components/Characters';
import Books from './components/Books';
import TvSeries from './components/TvSeries';
import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import SignUp from './components/SignUp.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyApi from './components/MyApi';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />    
    <ScrollToTop />
    <Routes>
          <Route path='/' element={<Home />} />        

          <Route path='/Characters' element={<Characters />} />
          <Route path='/Books' element={<Books />} />
          <Route path='/TvSeries' element={<TvSeries />} />
          <Route path='/Footer' element={<Footer />} />
          <Route path="pages/SignUp" element={<SignUp />} />
          <Route path='/MyApi' element={<MyApi />} />

        </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
