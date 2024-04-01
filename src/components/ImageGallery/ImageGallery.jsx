import React, { useRef, forwardRef, useEffect } from 'react';

import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ collection, onPhotoClick, openModal }) => {
  const openModalByClick = url => {
    openModal();
    onPhotoClick(url);
  };

  const lastImageRef = useRef(null);
  useEffect(() => {
    if (lastImageRef.current) {
      lastImageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [collection]);

  return (
    <ul className={css.list}>
      {collection.map((item, index) => (
        <li key={item.id} onClick={() => openModalByClick(item.urls.regular)}>
          <ImageCard image={item} />
          {index === collection.length - 1 && <div ref={lastImageRef} />}
        </li>
      ))}
    </ul>
    //   <ul className={css.list}>
    //     {collection.map(item => (
    //       <li key={item.id} onClick={() => openModalByClick(item.urls.regular)}>
    //         <ImageCard image={item} />
    //       </li>
    //     ))}
    //   </ul>
  );
};

export default ImageGallery;
