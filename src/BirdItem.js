import React from 'react';

export default function BirdItem({ bird: { name, type, color } }) {
  return (
    <div className="bird-item">
      <p>{name}</p>
      <p>{type}</p>
      <p>{color}</p>
    </div>
  );
}
