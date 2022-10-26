import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { Col } from 'reactstrap';
import { cartActions } from '../redux/slices/cartSlice';
// import {  toast } from 'react-toastify';
import toast from 'react-hot-toast';
// import productImg from '../assets/images/arm-chair-01.jpg'
import '../Style/ProductCart.css'

const ProductCart = ({item}) => {
   
   

    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id: item._id,
            productName: item.productName,
            price: item.price,
            image : item.imgUrl,
        }))
        toast.success("Add")
    }
    const navigate = useNavigate();

    const navigateToProduct = id => {
        console.log(id)
        navigate(`/productDetails/${id}`)
    }
    return (
        <Col lg='3' md='4' className='mb-2'>
            <div className='product_item'>
                <div className='product_img'>
                    <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
                </div>
                <div className='p-2 product_info'>
                     <h3 className='product_name' onClick={() => navigateToProduct(item._id)} >
                  {/* <Link to={`/productDetails/${item._id}`}> */}
                    {item.productName}
                    {/* </Link> */}
                    </h3>
                </div>
                <span >{item.category}</span>
                <div className='product_card-bottom d-flex align-items center 
                justify-content-between p-2'>
                    <span className='price'>${item.price}</span>
                    <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
                        <i className='ri-add-line'></i>
                    </motion.span>
                </div>
            </div>
        </Col>
    );
};

export default ProductCart;