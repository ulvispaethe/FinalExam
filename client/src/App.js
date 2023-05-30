import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import Add from './pages/Add/Add';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Wishlist from './pages/Wishlist/Wishlist';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:id" element={<Detail/>} />
      <Route path="/add" element={<Add/>} />
      <Route path="/wishlist" element={<Wishlist/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
