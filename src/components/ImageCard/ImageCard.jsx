import React from 'react';

const ImageCard = ({ image }) => {
  const { description, alt_description, urls, likes, user } = image;

  return (
    <div id="card">
      <img src={urls.small} alt={alt_description} width={250} />
      <p>Author: {user.name}</p>
      <p>Likes: {likes}</p>
      <p>{description}</p>
    </div>
  );
};

export default ImageCard;
