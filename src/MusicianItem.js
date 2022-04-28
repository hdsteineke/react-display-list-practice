import React from 'react';

export default function MusicianItem({ artist, album, songs }) {
  return (
    <div className="musician-item">
      <p>{artist}</p>
      <p>{album}</p>
      <ul className="songs">
        {songs.map((song) => (
          <li key={song}>{song}</li>
        ))}
      </ul>
    </div>
  );
}
