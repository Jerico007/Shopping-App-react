import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import CartPage from './Components/CartPage';
import {Route,Routes} from "react-router-dom";
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
