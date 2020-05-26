import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

const Login = (props) => {
  return (
    <Form className="theme">
        <h1>Create your account</h1>
      <FormGroup >
        <Label for="exampleName">Full Name</Label>
        <Input type="name" name="name" id="Fullname" placeholder="enter your name" />
      </FormGroup>
      <FormGroup >
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="email" />
      </FormGroup>
      <FormGroup >
        <Label for="CollegeName">College Name</Label>
        <Input type="string" name="college" id="examplcollege" placeholder="CMRCET,CMRIT,CMRTC,CMREC" />
      </FormGroup>
      <FormGroup>
        <Label for="RollNO">RollNO</Label>
        <Input type="string" name="RollNo" id="exampleRollNo" placeholder="University Number" />
      </FormGroup>
      <FormGroup>
        <Label for="YearofStudy">YearofStudy</Label>
        <Input type="string" name="YearofStudy" id="exampleYearofStudy" placeholder="1,2,3,4" />
      </FormGroup>
      <FormGroup>
        <Label for="Branch">Branch</Label>
        <Input type="name" name="Branch" id="exampleBranch" placeholder="CSE,ECE,MECH,CIVIL" />
      </FormGroup>
      <FormGroup>
        <Label for="Contact">Contact</Label>
        <Input type="string" name="Contact" id="exampleContact" placeholder="mobile number" />
      </FormGroup>
      <Button>Enter</Button>
    </Form>
  );
}
export default Login;
