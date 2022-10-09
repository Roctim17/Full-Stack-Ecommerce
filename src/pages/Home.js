import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet';
import heroImg from '../assets/images/hero-img.png'
import '../Style/Home.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/services';

const Home = () => {
    const year = new Date().getFullYear
    return (
            < Helmet title = { 'Home'} >
                <section className='hero_section'>
                    <Container>
                        <Row>
                            <Col lg='6' md="6">
                                <div className='hero_container'>
                                    <p className='hero_subtitle'>Trending product in {year}</p>
                                    <h2>Make Your Interior More Minimalistic & Modern</h2>
                                    <p>
                                        Lorem  Lorem LoremLoremLorem Lorem Lorem Lorem
                                        Lorem  Lorem LoremLoremLorem Lorem Lorem Lorem
                                        Lorem  Lorem LoremLoremLorem Lorem Lorem Lorem
                                    </p>
                                    <Link to='/shop' > <motion.button whileTap={{scale:1.2}} className='buy_btn'>SHOP NOW </motion.button></Link>
                                </div>
                            </Col>
                            <Col lg='6' md="6">
                                <div className='hero_img'>
                                <img src={heroImg} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Services></Services>
        </Helmet >
    );
};

export default Home;