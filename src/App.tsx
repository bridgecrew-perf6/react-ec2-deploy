import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './Test';
import Test2 from './Test2';
import Home from './Home';

function App(): React.ReactElement {
  return (
    <div className='App'>
      <BrowserRouter basename='cocoa'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
          <Route path='/test2' element={<Test2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
