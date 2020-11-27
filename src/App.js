import React from 'react';
import Login from './components/Login/Login';
import LevelTwoQualifications from './components/LevelTwoQualifications/LevelTwoQualifications'
import LevelThreeQualifications from './components/LevelThreeQualifications/LevelThreeQualifications'

import Headers from './components/Header/Headers'
import { Container } from 'react-bootstrap';
function App() {
  return (
    <Container>
      <Headers/>
      <LevelThreeQualifications/>
    </Container>
  );
}

export default App;
