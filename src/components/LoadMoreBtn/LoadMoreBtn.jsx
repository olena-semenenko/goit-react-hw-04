const LoadMoreBtn = ({ onLoadMoreBtn }) => {
  return (
    <div>
      <button onClick={onLoadMoreBtn} type="button">
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
