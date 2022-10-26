import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CommonSection from '../components/CommonSection';
import Helmet from '../components/Helmet';
import '../Style/Cart.css'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
import {cartActions} from '../redux/slices/cartSlice'

const Cart = () => {
    const cartItems = useSelector(state=>state.cart.cartItems)
        return (
        <Helmet title='cart'>
            <CommonSection title='Shopping Cart' />
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                cartItems.length=== 0 ? <h2 className='fs-4 text-center'>No item added to the cart</h2> : (
                                    <table className='table bordered'>
                                <thead>
                                    <tr key="">
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <motion.th whileTap={{ scale: 1.2 }}>Delete</motion.th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {
                                    cartItems.map((item,index)=>(
                                        <tr key="">
                                        <td><img src={item.imgUrl} alt="" /></td>
                                        <td>{item.productName}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}pc</td>
                                        <td><i className='ri-delete-bin-line'></i></td>
                                    </tr>
                                    ))
                                   }
                                </tbody>
                            </table>
                                )
                            }
                            
                        </Col>
                        <Col lg='3'></Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Cart;