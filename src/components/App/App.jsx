import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { fetchPhotosByQuery } from '../api';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from '../ImageModal/ImageModal';

import css from './App.module.css';

const App = () => {
  // state variables
  const [response, setResponse] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);
  const [loadMore, setLoadMore] = useState(false);
  const [content, setContent] = useState(null);
  const [query, setQuery] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  // fetch photos

  const userQuery = value => {
    setQuery(value);
    console.log('query', value);
    setPage(1);
  };

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setResponse([]);

        setError(false);
        setLoading(true);

        const data = await fetchPhotosByQuery(query, page);

        setResponse(data);
        console.log('data', data);

        if (photos === null || photos.length === 0) {
          setPhotos(data.results);
        } else if (page > 1) {
          setPhotos([...photos, ...data.results]);
        } else {
          setPhotos(data.results);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
    if (query !== '') {
      setLoadMore(true);
    }
  }, [query, page]);

  // load more photos
  const loadMorePhotos = () => {
    if (page <= response.total_pages) {
      setPage(page + 1);
    } else {
      setLoadMore(false);
      setPage(0);
    }
  };

  // logic of open modal
  const handleImageClick = url => {
    console.log('url', url);
    setContent(url);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // render
  return (
    <div className={css.container}>
      <SearchBar onSubmit={userQuery}></SearchBar>
      {Array.isArray(photos) && (
        <ImageGallery
          collection={photos}
          onPhotoClick={handleImageClick}
          openModal={openModal}
        ></ImageGallery>
      )}
      {error && <ErrorMessage></ErrorMessage>}
      {loading && <Loader></Loader>}
      {loadMore && <LoadMoreBtn onLoadMoreBtn={loadMorePhotos}></LoadMoreBtn>}
      <ImageModal
        onOpenButton={openModal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        content={content}
      ></ImageModal>
    </div>
  );
};

export default App;
