import React from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import CommonSection from '../components/CommonSection';
import Helmet from '../components/Helmet';
import useProduct from '../Hooks/useProduct';

const ProductDetails = () => {
    const { id } = useParams();
    const [products] = useProduct(id)
    const product = products.find(item => item._id === id)
    const { imgUrl, productName, price, avgRating, review, description ,shortDesc} = product
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
                                <div className='product_rating'>
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
                                    <p>({avgRating}rating)</p>
                                </div>
                                <span>{price}</span>
                                <p>{shortDesc}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default ProductDetails;