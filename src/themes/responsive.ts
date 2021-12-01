import {Dimensions, Platform} from 'react-native';

const {width: DEVICE_SCREEN_WIDTH, height: DEVICE_SCREEN_HEIGHT} =
  Dimensions.get('screen');

const DESIGN_SCREEN_WIDTH = 375;
const DESIGN_SCREEN_HEIGHT = 667;

const widthPercent = DEVICE_SCREEN_WIDTH / DESIGN_SCREEN_WIDTH;
const heightPercent = DEVICE_SCREEN_HEIGHT / DESIGN_SCREEN_HEIGHT;

function getWidth(designWidth: number): number {
  if (designWidth === undefined) return DEVICE_SCREEN_WIDTH;
  const result = designWidth * widthPercent;
  return Number(result.toFixed(1));
}

function getHeight(designHeight: number): number {
  if (designHeight === undefined) return DEVICE_SCREEN_HEIGHT;
  const result = designHeight * heightPercent;
  return Number(result.toFixed(1));
}

function getFontSize(designSize: number): number {
  return getWidth(designSize);
}

export const getSize = {
  w: getWidth,
  h: getHeight,
  f: getFontSize,
};

export const w = getWidth;
export const h = getHeight;
export const f = getFontSize;

export const size = {
  font: {
    title: f(32),
    heading: f(24),
    subHeading: f(18),
    large: f(16),
    normal: f(14),
    small: f(12),
    xSmall: f(10),
  },
};
