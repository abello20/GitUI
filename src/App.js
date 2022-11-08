import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { PageNotFound } from './component/PageNotFound';
import { Update } from './component/Update';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router> 
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="*" element={<PageNotFound />}/>
            <Route exact path="/update/:id" element={<Update/>} />
          </Routes>
        </Router>
        
    </div>
    
  );
}

export default App;
