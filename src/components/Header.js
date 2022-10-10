import React, { useEffect, useRef } from 'react';
import { Container, Row } from 'reactstrap';
import logo from '../assets/images/eco-logo.png';
import userIcon from '../assets/images/user-icon.png';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css'

const nav_links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    },
]

const Header = () => {

const headerRef = useRef(null);

const menuRef = useRef(null)

const stickyHeaderFnc = ()=>{
    window.addEventListener('scroll',()=>{
        if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
            headerRef.current.classList.add('sticky_header')
        }else{
            headerRef.current.classList.remove('sticky_header')
        }
    })
}

useEffect(()=>{
    stickyHeaderFnc()
    return ()=> window.removeEventListener('scroll', stickyHeaderFnc)
});
const menuToggle = ()=> menuRef.current.classList.toggle('active_menu')

    return (
        <header className='header' ref={headerRef}>
            <Container>
                <Row>
                    <div className='nav_wrapper'>
                        <div className='logo'>
                            <img src={logo} alt="" />
                            <div>
                                <h1>Online-Mart</h1>
                                {/* <p>Since 2021</p>? */}
                            </div>
                        </div>
                        <div className='navigation' ref={menuRef} onClick={menuToggle}>
                            <ul className='menu'>
                                {
                                    nav_links.map((item, index) => (
                                        <li className='nav_item' key={index}>
                                            <NavLink to={item.path} className= {(navClass) => navClass.isActive ? 'nav_active' : ''}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='nav_icons'>
                            <span className='fav_icon'>
                                <i className='ri-heart-line'></i>
                                <span className='badge'>1</span>
                            </span>
                            <span className='cart_icon'>
                                <i className='ri-shopping-bag-line'></i>
                                <span className='badge'>1</span>
                            </span>
                            <span>
                                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
                            </span>
                            <div className='mobile_menu'>
                            <span onClick={menuToggle}>
                                <i class="ri-menu-line"></i>
                            </span>
                        </div>
                        </div>
                        
                    </div>

                </Row>
            </Container>

        </header>
    );
};

export default Header;