import React from 'react';

export default function BookItem({ title, year, author }) {
  return (
    <div className="book-item">
      <p>{title}</p>
      <p>{year}</p>
      <ul className="author">
        <li>{author.name}</li>
        <li>{author.birth}</li>
      </ul>
    </div>
  );
}
