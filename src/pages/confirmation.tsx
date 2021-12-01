import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ButtonIcon from '../components/buttonIcon';
import TextCustom from '../components/text';
import Colors from '../themes/colors';
import {getSize} from '../themes/responsive';
import stylesCommon from '../themes/styles';

const backIcon = require('../../assets/icons/back.png');
const closeIcon = require('../../assets/icons/close.png');
const uploadIcon = require('../../assets/icons/upload.png');

const paymentRage = [
  {
    key: '105',
    value: '105',
  },
  {
    key: '106',
    value: '106',
  },
  {
    key: '110',
    value: '110',
  },
];

const Confirmation: React.FC<{onPress?: () => void}> = ({onPress}) => {
  const [paymentAmount, setPaymentAmount] = useState<String>(
    paymentRage[0].value,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const itemContent = (content: string, value: string) => {
    return (
      <View style={[styles.header, {marginBottom: 8}]}>
        <TextCustom>{content}</TextCustom>
        <TextCustom fontWeight="bold">{value}</TextCustom>
      </View>
    );
  };

  const _renderRoundIt = ({item, index}) => {
    const isSelected = item.value === paymentAmount;

    return (
      <TouchableOpacity
        style={[
          styles.roundButton,
          {
            backgroundColor: isSelected ? Colors.primary : 'transparent',
            borderColor: isSelected ? Colors.primary : Colors.border,
          },
        ]}
        onPress={() => setPaymentAmount(item.value)}>
        <TextCustom
          color={Colors.primary}
          color={!isSelected ? Colors.primary : Colors.white}>
          {item.value}
        </TextCustom>
      </TouchableOpacity>
    );
  };

  const getTotal = () => {
    const selected = +paymentAmount;

    const total = 5000 + selected * 5;
    return `$${total.toFixed(2)}`;
  };

  const confirm = async () => {
    // TODO: mock fetch data

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      onPress!();
    }, 2000);
  };
  return (
    <View style={styles.contentContainer}>
      <View style={styles.header}>
        <ButtonIcon source={backIcon} size={24} onPress={onPress} />
        <TextCustom>Confirmation</TextCustom>
        <ButtonIcon source={closeIcon} size={24} onPress={onPress} />
      </View>

      <TextCustom
        size={getSize.f(24)}
        color={Colors.back}
        styles={{marginVertical: 16}}
        fontWeight="bold">
        Issue a loan
      </TextCustom>

      <View style={stylesCommon.row}>
        <ButtonIcon source={uploadIcon} size={40} />
        <TextCustom color={Colors.placeholder} styles={{marginLeft: 8}}>
          To: Leslee Moss
        </TextCustom>
      </View>

      <View style={styles.content}>
        {itemContent('Loan Amount', '$5,000')}
        {itemContent('Loan Term', '5 months')}
        {itemContent('Repayment Amount', `$${paymentAmount}/month`)}
      </View>

      <View style={styles.roundIt}>
        <TextCustom fontWeight="700">Round it up </TextCustom>
        <FlatList
          data={paymentRage}
          keyExtractor={(item, index) => `${item.key}${index}`}
          renderItem={_renderRoundIt}
          horizontal={true}
          contentContainerStyle={{marginVertical: 8}}
        />
        <TextCustom
          color={Colors.primary}
          size={getSize.f(12)}
          fontWeight="700">
          Enter custom Amount
        </TextCustom>
      </View>

      <View style={styles.total}>
        <TextCustom fontWeight="700">Total Receivable</TextCustom>
        <TextCustom
          fontWeight="700"
          size={getSize.f(32)}
          color={Colors.primary}>
          {getTotal()}
        </TextCustom>
      </View>

      <TouchableOpacity onPress={confirm} style={{marginTop: '50%'}}>
        <LinearGradient
          colors={['#41BFBD', Colors.primary]}
          style={styles.buttonConfirm}>
          {isLoading && <ActivityIndicator color={Colors.white} size={22} />}

          <TextCustom
            size={getSize.f(22)}
            color={Colors.white}
            styles={{marginLeft: 8}}>
            Confirm
          </TextCustom>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Confirmation);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
    height: Dimensions.get('window').height,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  content: {
    marginVertical: 24,
  },
  roundIt: {
    alignItems: 'center',
  },
  roundButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginHorizontal: 8,
    borderRadius: getSize.w(20),
    borderWidth: 1,
  },
  total: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  wrapButton: {
    // flex: 1,
    // justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
  buttonConfirm: {
    paddingVertical: 12,
    borderRadius: getSize.w(24),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
