import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
        <div className="photo">
          <img src="./profile_photo.jpg" alt="profile"></img>
        </div>
        <div className="short-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div className="portfolio-best-description">This is short description about my portfolio</div>
        <div className="portfolio-best">Some portfolio photoes goes here</div>
    </div>
  );
}

export default Dashboard;
