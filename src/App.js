import React from 'react';
import ApexChart from './components/graph'
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import Register from './components/register.js'
import Votes from './components/Votes'
import First from './components/first'
import Second from './components/Second'
function App() {
  return (
    <div className="App">

      <Router>
      <Route path='/create' component={Register} />
      <Route path='/compare' component={ApexChart} />
      <Route path='/vote' component={Votes} />
      <Route path='/id' component={Second} />
      <Route path='/f' component={First} />
    </Router>
    </div>
  );
}

export default App;
