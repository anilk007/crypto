import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Menu from './shared/menu/Menu';
import RouteComponent from './shared/route/Route';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <RouteComponent />
      </div>
    </Router>
  );
}

export default App;
