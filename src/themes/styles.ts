import {StyleSheet} from 'react-native';
import Colors from './colors';

const stylesCommon = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
export default stylesCommon;
