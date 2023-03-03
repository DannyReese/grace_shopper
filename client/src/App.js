import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js'
import Product from './routes/Product.js';
import Landing from './routes/Landing.js';
import Home from './routes/Home.js'
import Signup from './routes/Signup'
import Login from './routes/Login.js'
import Cart from './routes/Cart.js'
import SingleProduct from './routes/SingleProduct.js';
import { useState } from 'react';
import Cookies from 'universal-cookie';


function App() {
  const BASE_URL = 'http://localhost:3001/api';
  // const jwt = localStorage.getItem('jwt');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [prodId, setProdId] = useState(null)
  const cookie = new Cookies()

  return (
    <div className="App">

      <Routes>
        <Route exact path={'/'} element={
          <Landing cookie={cookie}/>}
        />

        <Route path='/home' element={
          <>
            <Navbar/>
            <Home prodId={prodId} setProdId={setProdId} cookie={cookie}/>
          </>
        } />
        <Route path='/products' element={
          <>
            <Navbar />
            <Product />
          </>
        } />

<Route path='/product-view' element={
          <>
            <Navbar/>
            <SingleProduct cookie={cookie}/>
          </>
}/>
        <Route exact path={"/login"} element={
          <>
          <Navbar />
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            BASE_URL={BASE_URL}
          />
          </>}
        />
        <Route exact path={"/signup"} element={
           <>
           <Navbar />
          <Signup
            password={password}
            setPassword={setPassword}
            username={username}
            setUsername={setUsername}
            BASE_URL={BASE_URL}
          />
        </>}
        />

        <Route path={'/cart'} element={
          <>
            <Navbar/>
            <Cart cookie={cookie}/>
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
