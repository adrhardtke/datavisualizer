import React from 'react';
import { Container } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'

function Home() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Tabs />
      </Container>
    </div>
  );
}

export default Home;
