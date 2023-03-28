import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />

      </Routes>
    </Router>
  );
}

export default App;
