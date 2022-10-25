import React from 'react';
import { Container } from 'reactstrap';
import '../Style/CommonSection.css'

const CommonSection = ({title}) => {
    return (
        <section className='common'>
            <Container className='text-center'>
            <h1>{title}</h1>
            </Container>
        </section>
    );
};

export default CommonSection;