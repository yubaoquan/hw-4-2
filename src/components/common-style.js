export { GoPerson } from 'react-icons/go';
export {
  AiFillLock,
  AiFillWechat,
  AiOutlineQq,
  AiOutlineWeibo,
} from 'react-icons/ai';
export { ImMobile2 } from 'react-icons/im';
export { default as TextDivider } from './text-divider/index.jsx';

export const myGray = '#969696';

export const commonSubmitBtnStyle = {
  w: '100%',
  color: '#fff',
  borderRadius: '25px',
  mt: '20px',
  px: '18px',
  py: '9px',
  fontSize: '18px',
};

export const inputHeight = '50px';

export const commonInputStyle = {
  border: '1px solid #c8c8c8',
  borderColor: '#c8c8c8',
  bgColor: 'hsla(0,0%,71%,.1)',
  h: inputHeight,
  _focus: {
    boxShadow: 'none',
  },
  _hover: {
    borderColor: '#c8c8c8',
  },
};

export const topInputStyle = {
  ...commonInputStyle,
  mb: '-1px',
  borderTopRadius: '4px',
  borderBottomRadius: '0',
};

export const middleInputStyle = {
  ...commonInputStyle,
  borderRadius: '0',
  mb: '-1px',
};

export const bottomInputStyle = {
  ...commonInputStyle,
  borderTopRadius: '0',
  borderBottomRadius: '4px',
};

export const snsIconStyle = {
  mx: '15px',
  w: '30px',
  h: '30px',
  cursor: 'pointer',
};
