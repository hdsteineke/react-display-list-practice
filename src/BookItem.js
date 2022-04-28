import React from 'react';

export default function BookItem({ title, year, author }) {
  return (
    <div>
      <p>{title}</p>
      <p>{year}</p>
      <ul className='author-info'> 
        <li>{author.name}</li>
        <li>{author.birth}</li>
      </ul>
    </div>
  );
}
