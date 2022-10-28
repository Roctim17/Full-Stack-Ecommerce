import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import Shop from '../pages/Shop';
import Signup from '../pages/Signup';
import RequireAuth from './RequireAuth';

const Routers = () => {
    return <Routes>
        {/* <Route path='/' element={<NavLink to='home' />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/productDetails/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={
            <RequireAuth>
                <Checkout />
            </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
    </Routes>
        ;
};

export default Routers;