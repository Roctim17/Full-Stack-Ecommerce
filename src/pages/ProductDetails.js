import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import CommonSection from '../components/CommonSection';
import Helmet from '../components/Helmet';
// import useProduct from '../Hooks/useProduct';
import '../Style/ProductDetails.css'
import { motion } from 'framer-motion'
import products from '../assets/data/products';

const ProductDetails = () => {
    const [tab, setTab] = useState('desc')
    const { id } = useParams();
    // const [products] = useProduct(id)
    const product = products.find(item => item._id = id)
    const { imgUrl, productName, price, avgRating, shortDesc, description, reviews } = product
    console.log(product, "i")
    return (
        <Helmet>
            <CommonSection />
            <section className='pt-0'>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={imgUrl} alt="" />
                        </Col>
                        <Col lg='6'>
                            <div className='product_details'>
                                <h2>{productName}</h2>
                                <div className='product_rating d-flex align-items-center gap-5 mb-3'>
                                    <div>
                                        <span>
                                            <i className='ri-star-s-fill'></i>
                                        </span>
                                        <span>
                                            <i className='ri-star-s-fill'></i>
                                        </span>
                                        <span>
                                            <i className='ri-star-s-fill'></i>
                                        </span>
                                        <span>
                                            <i className='ri-star-s-fill'></i>
                                        </span>
                                        <span>
                                            <i className='ri-star-half-s-fill'></i>
                                        </span>
                                    </div>
                                    <p>( <span>{avgRating}</span> rating)</p>
                                </div>
                                <span className='product_price'>{price}</span>
                                <p className='mt-3'>{shortDesc}</p>
                                <motion.button whileTap={{ scale: 1.2 }} className='buy_btn'>Add to Cart</motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className='tab_wrapper d-flex align-items-center gap-5'>
                                <h6 className={`${tab === 'desc' ? 'active_tab' : ''}`}
                                    onClick={() => setTab('desc')}
                                >Description</h6>
                                <h6 className={`${tab === 'rev' ? 'active_tab' : ''}`}
                                    onClick={() => setTab('rev')}
                                >Reviews ({reviews.length})</h6>
                            </div>
                            {
                                tab === 'desc' ? (<div className='tab_content mt-5'>
                                    <p>{description}</p>
                                </div>) : (
                                    <div className='product_review'>
                                        <div className='review_wrapper'>
                                            <ul>
                                                {
                                                    reviews?.map((item, index) => (
                                                        <li><span>{item.rating}(average rating)</span>
                                                            <p>{item.text}</p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }

                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default ProductDetails;