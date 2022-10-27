import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import Helmet from '../components/Helmet';
import '../Style/Login.css'

const Login = () => {

    const [email,setEmail]= useState('')
    const [password, setPassword]= useState('')

    return (
        <Helmet title='Login'>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' className='m-auto text-center'>
                            <h3 className='fw-bold mb-4'>Login</h3>
                            <Form className='auth_form'>
                                <FormGroup className='form_group '>
                                    <input type="email" placeholder='Email your email'
                                    value={email} onChange={e=> setEmail(e.target.value)} />
                                </FormGroup>
                                <FormGroup className='form_group '>
                                    <input type="password" placeholder='Email your password' 
                                    value={password} onChange={e=> setPassword(e.target.value)} />
                                    <button type='submit' className="buy_btn auth_btn">Login</button>
                                    <p>Don't have an account? {" "}
                                        <Link to='/signup'>Create an account</Link></p>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;