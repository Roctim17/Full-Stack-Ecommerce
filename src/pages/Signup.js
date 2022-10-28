// import { async } from '@firebase/util';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import Helmet from '../components/Helmet';
import { auth, db, storage } from '../firebase.init';
import '../Style/Login.css'

const Signup = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const signup = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user
            const storageRef = ref(storage, `images/${Date.now() + username}`);
            const uploadTask = uploadBytesResumable(storageRef, file)
            uploadTask.on((error) => {
                toast.error(error.message)
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    // update user profile
                    await updateProfile(user, {
                        displayName: username,
                        photoURL: downloadURL
                    });
                    await setDoc(doc(db, 'users', user.uid), {
                        uid: user.uid,
                        displayName: username,
                        email,
                        photoURL: downloadURL,
                    })

                });
            }
            );
            setLoading(false)
            toast.success('Account Done');
            navigate('/login')
        } catch (error) {
            setLoading(false)
            toast.error(error.message)
        }
    };

    return (
        <Helmet title='Signup'>
            <section>
                <Container>
                    <Row>
                       {
                        loading? <Col lg='12' className='text-center'><h6 
                        className='fw-bold'>Loading ....</h6></Col> :<Col lg='6' className='m-auto text-center'>
                        <h3 className='fw-bold mb-4'>Signup</h3>
                        <Form className='auth_form'
                            onSubmit={signup}>
                            <FormGroup className='form_group '>
                                <input type="text" placeholder='Email your name'
                                    value={username} onChange={e => setUsername(e.target.value)} />
                            </FormGroup>
                            <FormGroup className='form_group '>
                                <input type="email" placeholder='Email your email'
                                    value={email} onChange={e => setEmail(e.target.value)} />
                            </FormGroup>
                            <FormGroup className='form_group '>
                                <input type="password" placeholder='Email your password'
                                    value={password} onChange={e => setPassword(e.target.value)} />
                            </FormGroup>
                            <FormGroup className='form_group '>
                                <input type="file"
                                    onChange={e => setFile(e.target.files)} />
                            </FormGroup>
                            <button type='submit' className="buy_btn auth_btn">Create an Account</button>
                            <p>Already have an account? <Link to='/login'>Login</Link></p>
                        </Form>
                    </Col>
                       } 
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Signup;