import React from 'react';
import {Link} from "react-router-dom";

function MenuBar() {
  return (
    <div className="menubar">

      <ul>
        <li><Link to="/">about</Link></li>
        <li>•</li>
        <li><Link to="/portfolio">portfolio</Link></li>
        <li>•</li>
        <li><Link to="/contact">contact</Link></li>
      </ul>
    </div>
  );
}

export default MenuBar;
