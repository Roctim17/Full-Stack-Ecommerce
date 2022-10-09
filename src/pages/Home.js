import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet';
import heroImg from '../assets/images/hero-img.png'
import '../Style/Home.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/services';
import ProductList from '../components/ProductList';
import products from '../assets/data/products';
import counterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/Clock'

const Home = () => {

    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const year = new Date().getFullYear();

    useEffect(() => {
        const filterTrendingProducts = products.filter(item => item.category === 'chair');
        const filterBestSalesProducts = products.filter(item => item.category === 'sofa');

        setTrendingProducts(filterTrendingProducts);
        setBestSalesProducts(filterBestSalesProducts);
    }, [])

    return (
        < Helmet title={'Home'} >
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
                                <Link to='/shop' > <motion.button whileTap={{ scale: 1.2 }} className='buy_btn'>SHOP NOW </motion.button></Link>
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
            <section className='trending_products'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section_title'>Trending Products</h2>
                        </Col>
                        <ProductList data={trendingProducts} />
                    </Row>
                </Container>
            </section>
            <section className='best_sales'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section_title'>Best Sales</h2>
                        </Col>
                        <ProductList data={bestSalesProducts} />
                    </Row>
                </Container>
            </section>
            <section className='timer_count'>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className='clock_top-content'>
                                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                            </div>
                            <Clock />
                            <motion.button 
                            whileTap={{scale:1.2}}
                            className='buy_btn store_btn'>
                                <Link to='/shop' className='text-dark'>Visit Store</Link>
                            </motion.button>
                        </Col>
                        <Col lg='6' md='6' className='text-end'>
                            <img src={counterImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet >
    );
};

export default Home;