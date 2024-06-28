import { ColorRing } from 'react-loader-spinner';
import s from './Loading.module.css';
export const Loading = () => {
  return (
    <div className={s.div}>
   <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
    </div>
  );
};