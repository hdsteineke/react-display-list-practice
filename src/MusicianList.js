import React from 'react';
import MusicianItem from './MusicianItem';

export default function MusicianList({ musicians }) {
  return (
    <div className="book-list">
      {musicians.map((musician) => (
        <MusicianItem key={musician.artist} {...musician} />
      ))}
    </div>
  );
}
