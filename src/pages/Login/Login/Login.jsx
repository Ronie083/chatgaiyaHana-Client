import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const [logError, setLogError] = useState('');
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
                setLogError('')
                event.target.reset();
            })
            .catch(error => {
                console.log(error.message);
                setLogError("Incorrect Password");
            })
    }




    return (
        <Container className='w-50 mt-5 mx-auto'>
            <Form onSubmit={handleSignIn}>
                <h2>Please Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don&apos;t Have an account? <Link to="/register">Register</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                    {logError}
                </Form.Text>
            </Form>
            <div className='text-center my-3'>
                <h4>Log In with</h4>
                <Button className='my-3' variant="outline-success">Google</Button>
                <br />
                <Button variant="outline-dark">GitHub</Button>
            </div>
        </Container>
    );
};

export default Login;