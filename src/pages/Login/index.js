import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Logo from '../../assets/images/logonew.png';
import CustomButton from '../../components/CustomButton';
import InputField from '../../components/InputField';
import Bg from '../../assets/images/bg2.png';
import {useNavigation} from '@react-navigation/native';
const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ImageBackground source={Bg} style={{resizeMode: 'cover', flex: 1}}>
        <View style={{paddingHorizontal: 25}}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{
                width: 350,
                height: 350,
                resizeMode: 'contain',
                marginTop: 50,
              }}
              source={Logo}
            />

            <InputField label={'Admin ID'} keyboardType="email-address" />
            <InputField
              label={'Password'}
              inputType="password"
              fieldButtonLabel={'Forgot?'}
              fieldButtonFunction={() => {}}
            />
            <CustomButton
              label={'Login'}
              onPress={() => navigation.navigate('Dashboard')}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
