import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './services.css'
// import serviceData from '../assets/data/serviceData'
import { motion } from 'framer-motion';

const Services = () => {

    
const [services, setServices]= useState([]);
useEffect(()=>{
    fetch("https://fast-reef-84114.herokuapp.com/service")
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])

    return (
        <section className='services'>
            <Container>
                <Row>
                    {
                        services.map((item,index)=>(
                            <Col lg='3' md='4' key={index}>
                        <motion.div whileHover={{scale:1.1}}
                        className='service_item'
                        style={{background: `${item.bg}`}}
                        >
                            <span><i className={item.icon}></i></span>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </motion.div>
                    </Col> 
                        ))
                    }
                   
                </Row>
            </Container>
        </section>
    );
};

export default Services;