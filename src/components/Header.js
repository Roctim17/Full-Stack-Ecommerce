import React from 'react';
import { Container, Row } from 'reactstrap';
import './Header.css'
import logo from '../assets/images/eco-logo.png'
import userIcon from '../assets/images/user-icon.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <Row>
                    <div className='nav_wrapper'>
                        <div className='loge'>
                            <img src={logo} alt="" />
                            <div>
                                <h1>Online-Mart</h1>
                                <p>Since 2021</p>
                            </div>
                        </div>
                        <div className='navigation'>
                            <ul className='menu'>
                                <li className='nav_item'>
                                    <NavLink to='home'>Home</NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='shop'>Shop</NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink to='cart'>Cart</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='nav_icons'>
                            <span className='fav-icon'><i className='ri-heart-line'></i></span>
                            <span className='cart_icon'>
                                <i className='ri-shopping-bag-line'></i>
                            </span>
                            <span><img src={userIcon} alt="" /></span>
                        </div>
                        <div className='mobile_menu'>
                            <span>
                            <i class="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>

        </header>
    );
};

export default Header;