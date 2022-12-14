import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import '../Style/Footer.css';
// import logo from '../assets/images/eco-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='4' md='6' className='mb-4'>
                        <div className='logo'>
                          
                            <div>
                                <h1 className='text-white'>Online-Mart</h1>
                            </div>
                        </div>
                        <p className='footer_text mt-4'>
                        MartOnline is a full suite solution enabling local shops to go online, digitise their consumer relationships more effectively. Focused on the daily needs .
                        </p>
                    </Col>
                    <Col lg='3' md='3' className='mb-4'>
                        <div className='footer_quick-links'>
                            <h4 className='quick_links-title'>Top Categories</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Mobile Phones</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Modern Sofa</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Arm Chair</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2' md='3' className='mb-4'>
                    <div className='footer_quick-links'>
                            <h4 className='quick_links-title'>Useful Links</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='4'>
                    <div className='footer_quick-links'>
                            <h4 className='quick_links-title'>Contact</h4>
                            <ListGroup className='footer_contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex
                                align-items-center gap-2'>
                                 <span><i className='ri-map-pin-line'></i></span>
                                 <p>123, Sylhet, Bangladesh </p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0 d-flex'>
                                <span><i className='ri-phone-line'> </i></span>
                                 <p> +880 1772 59 40 42 </p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0 d-flex'>
                                <span><i className='ri-mail-line'> </i></span>
                                 <p>mdrokibulislamroctim@gmail.com </p>
                                </ListGroupItem>
                             
                            
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;