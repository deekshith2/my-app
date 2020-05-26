import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

const Login = (props) => {
  return (
    <Form className="App-header">
        <h1>Login</h1>
      <FormGroup >
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password " />
      </FormGroup>
      <Button>Login</Button>
    </Form>
  );
}
export default Login;