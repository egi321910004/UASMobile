import {View, Text, StatusBar} from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Absensi = () => {
  return (
    <View>
      <StatusBar translucent={false} />
      <Text>Absensi</Text>
    </View>
  );
};

export default Absensi;
