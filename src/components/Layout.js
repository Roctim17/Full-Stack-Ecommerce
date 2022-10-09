import React from 'react';
import Routers from '../routers/Routers';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
    return <>
    <Header></Header>
    <div>
    <Routers></Routers>
    </div>
    <Footer></Footer>
    </>;
};

export default Layout;