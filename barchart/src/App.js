import React from 'react';
import ChartWrapper from './ChartWrapper';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar bg="light">
          <Navbar.Brand href="#home">Barchart charlie</Navbar.Brand>
        </Navbar>
        <ChartWrapper />
      </Container>
    </div>
  );
}

export default App;
