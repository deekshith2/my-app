import React, { Component } from 'react';
import Tabls from './Tabls';
import pic from './hstimg.jpeg';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
  import {Link} from 'react-router-dom';
  
  const Crds = (props) => {
    return (
      <div>
      <CardDeck className="App-header">
        <Card className="App-link">
          <CardImg top width="70%" src={pic} alt="Card image cap" />
          <CardBody>
            <CardTitle>BLOCK-A</CardTitle>
            <CardSubtitle>College hostel</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>Enter</Button>
          </CardBody>
        </Card>
        <Card className="App-link">
          <CardImg top width="70%" src={pic} alt="Card image cap" />
          <CardBody>
            <CardTitle>BLOCK-B</CardTitle>
            <CardSubtitle>College hostel</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button><Link to="/Login">Enter</Link></Button>
          </CardBody>
        </Card>
        <Card className="App-link">
          <CardImg top width="70%" src={pic} alt="Card image cap" />
          <CardBody>
            <CardTitle>BLOCK-C</CardTitle>
            <CardSubtitle>College hostel</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content.</CardText>
            <Button>Enter</Button>
          </CardBody>
        </Card>
      </CardDeck>
      <Tabls/>
      </div>
    );
  };

  export default Crds;
  