import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import Helmet from '../components/Helmet';
import '../Style/Login.css'

const Signup = () => {

    const [username,setUsername]= useState('')
    const [email,setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [file, setFile]= useState(null)

    return (
        <Helmet title='Signup'>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' className='m-auto text-center'>
                            <h3 className='fw-bold mb-4'>Signup</h3>
                            <Form className='auth_form'>
                                <FormGroup className='form_group '>
                                    <input type="text" placeholder='Email your email'
                                    value={username} onChange={e=> setUsername(e.target.value)} />
                                </FormGroup>
                                <FormGroup className='form_group '>
                                    <input type="email" placeholder='Email your email'
                                    value={email} onChange={e=> setEmail(e.target.value)} />
                                </FormGroup>
                                <FormGroup className='form_group '>
                                    <input type="password" placeholder='Email your password' 
                                    value={password} onChange={e=> setPassword(e.target.value)} />
                                </FormGroup>
                                <FormGroup className='form_group '>
                                    <input type="file" 
                                   onChange={e=> setFile(e.target.files)} />
                                </FormGroup>
                                    <button type='submit' className="buy_btn auth_btn">Create an Account</button>
                                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Signup;