import React from 'react';
import './AppXY.css';

export default function AppXY() {
  return (
    <div className="container" onPointerMove={(e) => console.log(e.clientX, e.clientY)}>
      <div className="pointer"></div>
    </div>
  );
}
