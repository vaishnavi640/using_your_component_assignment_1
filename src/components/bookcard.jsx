// write the book component code here

import React from 'react';
import './book.css'

const BookCard = ({ books }) => {
  return (
    <div className='bookCard'>
      {books &&
        books.map((book) => (
          <div key={book.id}>
            <div className='bookImage'>
              <img src={book.image} alt="book image" />
            </div>
            <strong>{book.name}</strong>
            <br />
            <p>
              Genre: <b>{book.genre}</b>
            </p>
            <p>Autor: <b>{book.author}</b></p>
          </div>
        ))}
    </div>
  );
};

export default BookCard;
