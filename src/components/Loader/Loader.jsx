import { Watch } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Watch
      visible={true}
      height="80"
      width="80"
      radius="48"
      color="#131ddc"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
