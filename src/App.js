import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Products from './Components/Products';
import Login from './Components/Login';
import { Navigate, Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Support from './Components/Support';
import Cart from './Components/Cart';
import Technologies from './Components/Technologies';
import { useContext } from 'react';
import { AuthContext } from './Components/Context/Context';
import Productdetails from './Components/Productdetails';
import Pagenotfound from './Pagenotfound';
import Html from './Components/Html';
import Css from './Components/Css';
import Js from './Components/Js';
import Reactcomp from './Components/Reactcomp';
import Protectedroutes from './Components/Protectedroutes';

function App() {
  const   {islogedin}=useContext(AuthContext)
  return (
    <div>
      {
        islogedin ? <div> <Nav/>
      
      
      <Routes>

      <Route path='/' element={<Protectedroutes><Home/></Protectedroutes>}></Route>
      <Route path="/profile" element={<Protectedroutes><Profile/></Protectedroutes>}></Route>
      <Route path="/products" element={<Protectedroutes><Products/></Protectedroutes>}></Route>
      <Route path="/support" element={<Protectedroutes><Support/></Protectedroutes>}></Route>





      <Route path="/technologies" element={<Protectedroutes><Technologies/></Protectedroutes>}>
      <Route path=" " element={<Navigate to="html" />}/>
      <Route path="html" element={<Html/>}/>
      <Route path="css" element={<Css/>}/>
      <Route path="js" element={<Js/>}/>
      <Route path="react" element={<Reactcomp/>}/>


      </Route>









      <Route path='/cart' element={islogedin ? <Cart/>:<Navigate to={"/"}/>}></Route>
      <Route path='/productdetails/:id/' element={islogedin ? <Productdetails/>:<Navigate to={"/"}/>}></Route>
      <Route path='/addtocart' element={islogedin ? <Cart/>:<Navigate to={"/"}/>}></Route>
      <Route path='*' element={<Pagenotfound/>}></Route> 
      
      </Routes>
      </div> :<Login/>
}  

      </div>
  );
}

export default App;
