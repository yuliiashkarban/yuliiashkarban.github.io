import React from 'react';
import Dashboard from './Dashboard';
import MenuBar from './MenuBar';

function Home() {
  return (
    <div className="home">
        <MenuBar />
        <Dashboard />
    </div>
  );
}

export default Home;
