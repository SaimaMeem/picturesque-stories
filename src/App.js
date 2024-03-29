import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Checkout from './pages/Checkout/Checkout';
import FAQ from './pages/Home/FAQ/FAQ';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/home#services" element={<Home></Home>}></Route>
        <Route path="/faq" element={<FAQ></FAQ>}></Route>
        <Route path='/service/:serviceId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        {/* <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
