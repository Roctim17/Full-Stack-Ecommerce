import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import Helmet from '../components/Helmet';
import { auth } from '../firebase.init';
import '../Style/Login.css'

const Login = () => {

    const [email,setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const signin= async (e)=>{
        e.preventDefault()
        setLoading(true)
        try{
            const userCredential= await signInWithEmailAndPassword(auth,email,password)
            const user =userCredential.user
            setLoading(false)
            toast.success('successfully logged in')
            navigate('/checkout')

        }catch(error){
            setLoading(true)
            toast.error(error.message)
        }
    }

    return (
        <Helmet title='Login'>
            <section>
                <Container>
                    <Row>
                        {
                            loading? <Col lg='12' className='text-center'><h6 
                            className='fw-bold'>Loading ....</h6></Col> :<Col lg='6' className='m-auto text-center'>
                            <h3 className='fw-bold mb-4'>Login</h3>
                            <Form className='auth_form' onSubmit={signin}>
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
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;