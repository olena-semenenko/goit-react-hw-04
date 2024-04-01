import React from 'react';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ collection, onPhotoClick, openModal }) => {
  const openModalByClick = url => {
    openModal();
    onPhotoClick(url);
  };

  return (
    <ul>
      {collection.map(item => (
        <li key={item.id} onClick={() => openModalByClick(item.urls.regular)}>
          <ImageCard image={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
