import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const indexRestraint = (index) => {
    if (index > people.length - 1) {
      index = 0;
      return index;
    } else if (index < 0) {
      index = people.length - 1;
      return index;
    } else {
      return index;
    }
  };

  const next = (index) => {
    const newIndex = index + 1;
    setIndex(indexRestraint(newIndex));
  };
  const previous = (index) => {
    const newIndex = index + 1;
    setIndex(indexRestraint(newIndex));
  };

  const random = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      random = index + 1;
    }
    setIndex(indexRestraint(random));
  };
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='btn-container'>
        <button className='prev-btn' onClick={() => previous(index)}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={() => next(index)}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={() => random()}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
