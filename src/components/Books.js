import React from 'react';
import './Books.css';
import { BOOK_DATA } from '../data';

const Books = () => {
  return (
    <section className="books-section" id="books">
      <div className="section-header">
        <span className="subtitle">The Collection</span>
        <h2>Featured Publications</h2>
      </div>

      <div className="books-grid">
        {BOOK_DATA.map((book) => (
          <div key={book.id} className="book-item">
            <div className="book-poster">
              <img src={book.image} alt={book.title} />
              <div className="book-overlay">
                <button className="buy-btn">Add to Library</button>
              </div>
            </div>
            <div className="book-info">
              <span className="book-tag">{book.tag}</span>
              <h3>{book.title}</h3>
              <p className="book-author">By {book.author}</p>
              <p className="book-price">{book.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Books;