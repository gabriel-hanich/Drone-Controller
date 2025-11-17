import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { ConnectionProvider } from './services/DroneConnection';

function App() {
  
  
  return (
    <ConnectionProvider>
      <Routes>
          <Route path='/' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </ConnectionProvider>
  );
}

export default App;
