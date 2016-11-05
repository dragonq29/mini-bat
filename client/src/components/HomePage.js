import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>Mini-bat</h1>
      <h2>Get Started</h2>
      <h6>made by dragonq29</h6>
      <ol>
        <li>Review the <Link to="fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
    </div>
  );
};

export default HomePage;
