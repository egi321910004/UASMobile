import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Cuti = () => {
  return (
    <View>
      <StatusBar translucent={false} />
      <Text>Cuti</Text>
    </View>
  );
};

export default Cuti;
