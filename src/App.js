import React from 'react';
import Login from './components/Login/Login';
import LevelTwoQualifications from './components/LevelTwoQualifications/LevelTwoQualifications'
import Headers from './components/Header/Headers'
import { Container } from 'react-bootstrap';
function App() {
  return (
    <Container>
      <Headers/>
      <LevelTwoQualifications/>
    </Container>
  );
}

export default App;
