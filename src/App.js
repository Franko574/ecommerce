
import './App.css';
import 'bulma/css/bulma.min.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/Context/CartContext.js';
import Producto from './components/Item/Item';
import Checkout from './components/CheckOut/CheckOut.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element = {<ItemListContainer/>} />
            <Route path='/category/:categoryId' element = {<ItemListContainer/>} />
            <Route path='/item/:itemId' element = {<ItemDetailContainer/>} />
            <Route path='/cart' element= {<Cart/>}/>
            <Route path='*' element = {<h1>404 NOT FOUND</h1>} />
            <Route path='/producto/:id' element = {<Producto/>}/>
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
