import React, { useContext, useState } from 'react';
import { Button, Container,  Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const [regError, setRegError] = useState('');

    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setRegError('');
                event.target.reset();
            })
            .catch(error => {
                console.log(error.message);
                setRegError(error.message);
            })
    }

    const handleTerms = event => {
        setAccepted(event.target.checked)
    }

    return (
        <Container className='w-50 mt-5 mx-auto'>
            <Form onSubmit={handleRegister}>
                <h2>Please Register</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter your photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                    onClick={handleTerms}
                    type="checkbox" name='accept'
                        label={
                            <>
                            Accept our <Link to="termsAndCon">Terms & Conditions</Link>
                            </>
                        }
                    />
                </Form.Group>
                <Button variant="dark" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-danger">
                    {regError}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;