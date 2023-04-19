import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../css/Login.css";
import Alert from 'react-bootstrap/Alert';
const Register = () => {
  return (
    <div className="login-container">
    <h2>Registration Form</h2>
    <Alert className="px-2 py-2" variant="danger">
          This Email is not Available
        </Alert>
      <Form>
      <Form.Group className="mb-3" controlId="register-name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="register-email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="register-password">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="btn btn-dark"   variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Register
