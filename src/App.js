import './App.css';
import Navbar from './compents/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignUp'
import Footer from './compents/Footer/Footer';
import men_banner from './compents/asstes/banner_mens.png'
import kids_banner from './compents/asstes/banner_kids.png'
import women_banner from './compents/asstes/banner_women.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory category="men" banner={men_banner}/>} />
        <Route path='/women' element={<ShopCategory category="women" banner={women_banner}/>} />
        <Route path='/kids' element={<ShopCategory category="kid" banner={kids_banner}/>} />
        <Route  path='/product' element={<Product />}>
            <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      

    </div>
  );
}

export default App;
