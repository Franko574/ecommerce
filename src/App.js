
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bulma/css/bulma.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element = {<ItemListContainer/>} />
          <Route path='/category/;categoryId' element = {<ItemListContainer/>} />
          <Route path='/item/:itemId' element = {<ItemDetailContainer/>} />
          <Route path='*' element = {<h1>404 NOT FOUND</h1>} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
