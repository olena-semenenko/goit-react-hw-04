import React from 'react';
import css from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  const { description, alt_description, urls, likes, user } = image;

  return (
    <div className={css.card}>
      <img src={urls.small} alt={alt_description} />
      <p>Author: {user.name}</p>
      <p>Likes: {likes}</p>
      <p className={css.description}>{description}</p>
    </div>
  );
};

export default ImageCard;
