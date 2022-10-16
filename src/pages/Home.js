import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet';
// import heroImg from '../assets/images/hero-img.png'
import '../Style/Home.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/services';
import ProductList from '../components/ProductList';
import counterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/Clock'
import useProduct from '../Hooks/useProduct';

const Home = () => {

    const [products] = useProduct([]);
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const year = new Date().getFullYear();
 
    useEffect(() => {
        const filterTrendingProducts = products.filter(item => item.category === 'chair');
        const filterBestSalesProducts = products.filter(item => item.category === 'sofa');
        const filterMobileProducts = products.filter(item => item.category === 'mobile');
        const filterWirelessProducts = products.filter(item => item.category === 'wireless');
        const filterPopularProducts = products.filter(item => item.category === 'watch');

        setTrendingProducts(filterTrendingProducts);
        setBestSalesProducts(filterBestSalesProducts);
        setMobileProducts(filterMobileProducts);
        setWirelessProducts(filterWirelessProducts);
        setPopularProducts(filterPopularProducts);
    }, [products])
  

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
                                MartOnline is a full suite solution enabling local shops to go online, digitise their consumer relationships more effectively. Focused on the daily needs .
                                </p>
                                <Link to='/shop' > <motion.button whileTap={{ scale: 1.2 }} className='buy_btn'>SHOP NOW </motion.button></Link>
                            </div>
                        </Col>
                        <Col lg='6' md="6">
                            <div className='hero_img'>
                                {/* <img src={heroImg} alt="" /> */}
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
                        <Col lg='6' md='12' className='count_down-col'>
                            <div className='clock_top-content'>
                                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                            </div>
                            <Clock />
                            <motion.button
                                whileTap={{ scale: 1.2 }}
                                className='buy_btn store_btn'>
                                <Link to='/shop' className='text-dark'>Visit Store</Link>
                            </motion.button>
                        </Col>
                        <Col lg='6' md='12' className='text-end counter_img'>
                            <img src={counterImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='new_arrivals'>
                <Container>
                    <Row> 
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className='section_title'>New Arrivals</h2>
                        </Col>
                        <ProductList data={mobileProducts} />
                        <ProductList data={wirelessProducts} />
                    </Row>
                </Container>
            </section>
            <section className='popular_category'>
            <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className='section_title'>Popular in Category</h2>
                        </Col>
                        <ProductList data={popularProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet >
    );
};

export default Home;