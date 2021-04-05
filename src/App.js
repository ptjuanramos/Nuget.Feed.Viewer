import React, { Component, useState } from 'react';
import './App.css';
import NugetCardList from './NugetCardList';
import { Row, Col, Form, Container } from 'react-bootstrap';

import { parseToList } from './xml-nugetlist-parser';

const App = () =>{

   const [nugetList, setNugetList] = useState([]); 

  const filterNugetsList = (list) =>  {

    if(list[0] && list[0].elements) {
      return list[0].elements.filter(e => e.name === "entry"); 
    }
    
    return [];
  }

  const onTextAreaChange = (event) =>  {
    let nugetAsJson = parseToList(event.target.value);
    let nugetElements = nugetAsJson.elements;

    if(nugetElements) {
      setNugetList(filterNugetsList(nugetElements));
    } 
    
  }

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <Form.Control onChange={onTextAreaChange} as="textarea" rows={20} />
          </Col>
          <Col className="nuget-list">
            <NugetCardList nugets={nugetList}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
  
}

export default App;
