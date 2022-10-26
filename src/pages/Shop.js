import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CommonSection from '../components/CommonSection';
import Helmet from '../components/Helmet'
import ProductList from '../components/ProductList';
import useProduct from '../Hooks/useProduct';
import '../Style/Shop.css'

const Shop = () => {
    const [products] = useProduct([])
    const [productData, setProductData] = useState(products)
    const handleFilter = e => {
        const filterValue = e.target.value
        if (filterValue === 'sofa') {
            const filterProduct = products.filter(item => item.category === 'sofa')
            setProductData(filterProduct)
        }
        if (filterValue === 'mobile') {
            const filterProduct = products.filter(item => item.category === 'mobile')
            setProductData(filterProduct)
        }
        if (filterValue === 'chair') {
            const filterProduct = products.filter(item => item.category === 'chair')
            setProductData(filterProduct)
        }
        if (filterValue === 'watch') {
            const filterProduct = products.filter(item => item.category === 'watch')
            setProductData(filterProduct)
        }
        if (filterValue === 'wireless') {
            const filterProduct = products.filter(item => item.category === 'wireless')
            setProductData(filterProduct)
        }
    }
    const handleSearch = e => {
        const searchValue = e.target.value;
        const searchProduct = products.filter(item => item.productName.toLowerCase().includes(searchValue.toLowerCase()))
        setProductData(searchProduct)
    }
    return (
        <Helmet title='shop'>
            <CommonSection title='Products' />
            <section>
                <Container>
                    <Row>
                        <Col lg='3' md='6'>
                            <div className='filter'>
                                <select onChange={handleFilter}>
                                    <option >Filter By Category</option>
                                    <option value="sofa" key="">Sofa</option>
                                    <option value="mobile" key="">Mobile</option>
                                    <option value="chair" key="">Chair</option>
                                    <option value="watch" key="">Watch</option>
                                    <option value="wireless" key="">Wireless</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='3' md='6' className='text_end'>
                            <div className='filter'>
                                <select>
                                    <option >Sort By</option>
                                    <option value="ascending" key="">Ascending</option>
                                    <option value="descending" key="">Descending</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='6' md='12'>
                            <div className='search-box'>
                                <input type="text" placeholder='search product' onChange={handleSearch}/>
                                <span>
                                    <i className='ri-search-line'></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        {
                            productData.length === 0 ? (<h1 className='text-center fs-4'>No Product are found !</h1>)
                                : (<ProductList data={productData} />)
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Shop;