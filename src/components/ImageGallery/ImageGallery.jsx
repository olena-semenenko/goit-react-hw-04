import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ collection, onPhotoClick, openModal }) => {
  const openModalByClick = url => {
    openModal();
    onPhotoClick(url);
  };

  return (
    <ul className={css.list}>
      {collection.map(item => (
        <li key={item.id} onClick={() => openModalByClick(item.urls.regular)}>
          <ImageCard image={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
