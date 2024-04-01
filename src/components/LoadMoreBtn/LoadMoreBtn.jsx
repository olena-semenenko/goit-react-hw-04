import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMoreBtn }) => {
  return (
    <div className={css.container}>
      <button onClick={onLoadMoreBtn} type="button" className={css.button}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
