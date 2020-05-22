import React from 'react';

function MenuBar() {
  return (
    <div className="menubar">

      <ul>
        <li><a href="/">home</a></li>
        <li>•</li>
        <li><a href="/about">about</a></li>
        <li>•</li>
        <li><a href="/portfolio">portfolio</a></li>
        <li>•</li>
        <li><a href="/contact">contact</a></li>
      </ul>
    </div>
  );
}

export default MenuBar;
