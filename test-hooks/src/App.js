import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Container>
        <Card border="success" style={{ margin: '1rem' }}>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card border="success" style={{ margin: '1rem' }}>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
        <Card border="success" style={{ margin: '1rem' }}>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </Container>
          
    </div>
  );
}

export default App;
