import React from 'react';
import '../Styles/Home.scss'
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
