//https://it-dev-journal.ru/articles/huk-use-resize-dlya-otslezhivaniya-shiriny-ekrana-v-react-js
import { useState, useEffect } from 'react';


const SCREEN_MOBILE_S = 320;
const SCREEN_MOBILE_M = 375;
const SCREEN_MOBILE_L = 425;
const SCREEN_SM = 576;
const SCREEN_MD = 768;
const SCREEN_LG = 992;
const SCREEN_XL = 1200;
const SCREEN_XXL = 1400;

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: Event) => {
      setWidth((event.target as Window).innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenMobileS: width >= SCREEN_MOBILE_S,
    isScreenMobileM: width >= SCREEN_MOBILE_M,
    isScreenMobileL: width >= SCREEN_MOBILE_L,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
  };
};