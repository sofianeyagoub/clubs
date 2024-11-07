import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#BA3539',
  primary_dark: '#731414',
  label: '#B1BED1',
  secondary: '#7B708C',

  // colors
  black: '#0A0118',
  white: '#FFFFFF',
  lightGray: '#64676D',
  lightGray2: '#EFEFF0',
  lightGray3: '#D4D5D6',
  lightGray4: '#7D7E84',
  gray: '#2D3038',
  gray1: '#282C35',
  darkRed: '#31262F',
  lightRed: '#C5505E',
  darkBlue: '#22273B',
  lightBlue: '#424BAF',
  darkGreen: '#213432',
  lightGreen: '#31Ad66',
  blue: '#1981CB',
  red: '#F42F2F',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  gap20: 20,
  gap40: 40,
  padding: 24,
  padding2: 36,

  // font sizes
  largeTitle: 42,
  h1: 30,
  h2: 24,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  margin1: 48,
  // app dimensions
  width,
  height,
};


const appTheme = {COLORS, SIZES};

export default appTheme;
