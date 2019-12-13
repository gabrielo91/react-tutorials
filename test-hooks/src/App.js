import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Form, Button } from 'react-bootstrap'
function App() {

  const [name, setName] = useState('default')
  const [counter, setCounter] = useState(1)

  const clickButton = (e) => {
    setCounter(counter+1)
  }

  return (
    <div>
      <Container>
        <Card border="success" style={{ margin: '1rem' }}>
        <Card.Header>{name}: {counter}</Card.Header>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Container>
          <Form>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Enter your Name"
                  value = {name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
            </Form.Group>
            <Button variant="primary" size="lg" active 
              onClick = {clickButton}
              >
              Primary button
            </Button>
          </Form>
        </Container>
        
      </Container>
    </div>
  );
}

export default App;
