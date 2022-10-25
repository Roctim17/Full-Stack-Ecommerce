import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CommonSection from '../components/CommonSection';
import Helmet from '../components/Helmet'
import '../Style/Shop.css'

const Shop = () => {
    return (
        <Helmet title='shop'>
            <CommonSection title='Products' />
            <section>
                <Container>
                    <Row>
                        <Col lg='3' md='4'>
                            <div className='filter'>
                                <select>
                                    <option >Filter By Category</option>
                                    <option value="sofa" key="">Sofa</option>
                                    <option value="mobile" key="">Mobile</option>
                                    <option value="chair" key="">Chair</option>
                                    <option value="watch" key="">Watch</option>
                                    <option value="wireless" key="">Wireless</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='3' md='4'>
                            <div className='filter'>
                                <select>
                                    <option >Sort By</option>
                                    <option value="ascending" key="">Ascending</option>
                                    <option value="descending" key="">Descending</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className='search-box'>
                                <input type="text" placeholder='type'/>
                                <span>
                                    <i className='ri-search-line'></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Shop;