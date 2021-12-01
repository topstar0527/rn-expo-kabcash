import React from 'react';
import {Image, ImageProps, StyleProp, TouchableOpacity} from 'react-native';

const ButtonIcon: React.FC<{
  source: any;
  styles?: StyleProp<ImageProps>;
  size: number;
  onPress?: () => void;
}> = ({source, size = 24, styles, onPress, ...props}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={source} style={[styles, {width: size, height: size}]} />
    </TouchableOpacity>
  );
};

export default React.memo(ButtonIcon);
