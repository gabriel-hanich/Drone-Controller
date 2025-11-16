import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { CounterProvider } from './services/DroneConnection';

function App() {
  
  
  return (
    <CounterProvider>
      <Routes>
          <Route path='/' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </CounterProvider>
  );
}

export default App;
