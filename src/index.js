import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Beers, Beer, RandomBeer, NewBeer, Header } from './components'

ReactDOM.render(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/beers" element={<Beers />}/>
        <Route path="/beer/:id" element={<Beer />} />
        <Route path="/random-beer" element={<RandomBeer />} />        
        <Route path="/new-beer" element={<NewBeer />} />        
      </Routes>
    </Router>,
  document.getElementById('root')
);

reportWebVitals();