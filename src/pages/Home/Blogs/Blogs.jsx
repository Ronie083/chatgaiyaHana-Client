import React, { useState } from 'react';
import { Button, Card, Container, Offcanvas } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Blogs = () => {
    return (
        <Container>
            <Header></Header>
            <Container className='my-5'>
                <Card className='my-5'>
                    <Card.Header className='d-flex'>
                        1. Tell us the differences between uncontrolled and controlled components.
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            In software development, uncontrolled components are UI elements like checkboxes and radio buttons that the user interacts with directly without any additional management by the application. Controlled components, on the other hand, are UI elements whose behavior is explicitly managed and tracked by the application.
                            <br />
                            An uncontrolled component might be like a light switch that you turn on or off without any external tracking. A controlled component, on the other hand, might be like a thermostat that you can adjust, and the system will update the temperature accordingly.
                            <br />
                            Controlled components give more predictability and control to the application, while uncontrolled components offer more flexibility to the user.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mb-5'>
                    <Card.Header className='d-flex'>
                        2. How to validate React props using PropTypes
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            React PropTypes is a built-in feature in React that helps you validate the data types and shapes of the props passed to a component. It provides a way to ensure that the expected data types and shapes of the props are passed to the component, which can help prevent errors and make your code more robust.
                            <br />
                            To validate React props using PropTypes, you need to do the following:
                            <br />
                            1.Import the PropTypes module from the prop-types package.
                            <br />
                            2.Define the PropTypes for your component by creating a propTypes object that specifies the expected data types and shapes of the props.
                            <br />
                            3.Use the validated props in your component.
                            <br />
                            React PropTypes supports various data types such as string, number, boolean, object, array, function, and more. You can specify whether the props are required or optional, and also define complex shapes using PropTypes.shape().
                            By using PropTypes to validate your props, you can catch errors early in the development process and make your code more reliable and maintainable.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mb-5'>
                    <Card.Header className='d-flex'>
                        3. Tell us the difference between nodejs and express js.
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Node.js is a server-side JavaScript runtime that allows developers to build server-side applications in JavaScript. It provides a platform for building scalable, fast, and lightweight network applications.
                            <br />
                            Express.js, on the other hand, is a lightweight and flexible Node.js web application framework that provides features for building web and mobile applications. It simplifies the process of building web applications by providing a set of built-in functionalities for handling HTTP requests, routes, middleware, templates, and more.
                            <br />
                            In simpler terms, Node.js is a runtime environment that executes JavaScript code on the server-side, while Express.js is a framework built on top of Node.js that provides additional features and functionality for building web applications.
                            <br />
                            To summarize, Node.js provides a platform for running JavaScript on the server, while Express.js is a framework built on top of Node.js that simplifies the process of building web applications.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mb-5'>
                    <Card.Header className='d-flex'>
                        4. What is a custom hook, and why will you create a custom hook?
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            In React, a custom hook is a reusable function that contains common stateful logic that can be shared across multiple components. It is a way to abstract and encapsulate logic that would otherwise be duplicated across different components.
                            <br />
                            A custom hook can be created for any piece of logic that is used in multiple components, such as API calls, form handling, authentication, and more. By creating a custom hook, you can avoid repeating the same code in different components and keep your code organized and modular.
                            <br />
                            To create a custom hook, you simply create a function that uses React is built-in hooks (such as useState, useEffect, useContext, etc.) and returns some data or functions that can be used in other components.
                            For example, let is say you have a piece of logic that fetches data from an API and updates the component is state. Instead of repeating this logic in multiple components, you can create a custom hook called useDataFetcher that encapsulates this logic and can be reused across different components.
                            <br />
                            To summarize, a custom hook is a reusable function that encapsulates common stateful logic that can be shared across multiple components. It can be created for any piece of logic that is used in multiple components, and it helps avoid code duplication and keeps your code organized and modular.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Footer></Footer>
        </Container>
    );
};

export default Blogs;