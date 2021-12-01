import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import Colors from '../themes/colors';
import {primaryFont} from '../themes/font';
import {getSize} from '../themes/responsive';

const TextCustom: React.FC<{
  color?: string;
  size?: number;
  fontWeight?: string;
  children: string;
  styles?: StyleProp<TextStyle> | undefined;
}> = ({children, color, size, fontWeight, styles, ...props}) => {
  return (
    <Text
      style={{
        color: color ?? Colors.textGrey,
        fontSize: size ?? getSize.f(16),
        fontWeight: fontWeight ?? '400',
        fontFamily: primaryFont,
        ...styles,
      }}
      {...props}>
      {children}
    </Text>
  );
};

export default React.memo(TextCustom);
