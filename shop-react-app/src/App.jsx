import { CartSlide } from "./components/CartSlide";
import {Route,Routes} from "react-router-dom"
import { Cart } from "./components/Cart";
import { Products } from "./components/Products";


const App = () => {
 return(
   <div className="App">
      <Routes>
        <Route path="/" element={<CartSlide/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/product/:id">{<ProductDetail/>}</Route>
     </Routes>
   </div>
 
 ) 
};

export default App;