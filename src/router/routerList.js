import React from 'react'
import {Routes, Route} from "react-router-dom";
import Product from '../components/allProduct';
import Cart from '../components/cart';
import Checkout from '../components/checkout';
import Detail from '../components/detail';
import Home from '../components/home';
import MainLayout from '../layouts/mainLayout';
import Login from '../components/login';
import Register from '../components/register';

const RouterList = () => {
  return (
    <Routes>
      <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/product" element={<Product></Product>}/>
          <Route path="/product/:id" element={<Product></Product>}/>
          <Route path="/detail/:id" element={<Detail></Detail>}/>
          <Route path="/cart" element={<Cart></Cart>}/>
          <Route path="/checkout" element={<Checkout></Checkout>}/>
      </Route>
      <Route element={<MainLayout></MainLayout>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Route>
    </Routes>
  )
}

export default RouterList