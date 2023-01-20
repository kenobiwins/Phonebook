import { ThreeDots } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      color="#07c"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
