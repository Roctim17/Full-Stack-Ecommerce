import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './services.css'
import serviceData from '../assets/data/serviceData'

const Services = () => {
    return (
        <section className='services'>
            <Container>
                <Row>
                    {
                        serviceData.map((item,index)=>(
                            <Col lg='3' md='4' key={index}>
                        <div className='service_item'>
                            <span><i className={item.icon}></i></span>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                    </Col> 
                        ))
                    }
                   
                </Row>
            </Container>
        </section>
    );
};

export default Services;