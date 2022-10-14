import React, { useEffect } from 'react';
import { init } from '../Animation/initChair.Layer';
import Routers from '../routers/Routers';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
    useEffect(()=>{
        init()
      })
    return( <>
        <Header />
        <div>
            <Routers></Routers>
        </div>
        <Footer />
    </>);
};

export default Layout;