import React, {useCallback, useMemo, useRef} from 'react';

import BottomSheet from '@gorhom/bottom-sheet';
import {StyleSheet, Dimensions, View, TouchableOpacity} from 'react-native';
import stylesCommon from './src/themes/styles';
import TextCustom from './src/components/text';
import Confirmation from './src/pages/confirmation';

const height = Dimensions.get('window').height;

const App = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => [height - 40, '50%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const onClose = () => bottomSheetRef.current?.close();
  const onOpen = () => bottomSheetRef.current?.snapToIndex(0);

  return (
    <View style={[stylesCommon.container, styles.container]}>
      <TouchableOpacity onPress={onOpen}>
        <TextCustom size={32}> Confirm </TextCustom>
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <Confirmation onPress={onClose} />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
