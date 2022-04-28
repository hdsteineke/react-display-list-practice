import React from 'react';
import ColorItem from './ColorItem';

export default function ColorList({ colors }) {
  return (
    <div>
      {colors.map((color) => (
        <ColorItem key={color} color={color} />
      ))}
    </div>
  );
}
