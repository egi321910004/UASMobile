import {View, Text, StatusBar, ImageBackground, Image} from 'react-native';
import React, {Component} from 'react';
import Bg from '../../assets/images/bg2.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ActionCenter from '../../components/ActionCenter';

export class Dashboard extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor="transparent"
        />
        <ImageBackground
          source={Bg}
          style={{flex: 1.2, flexDirection: 'column'}}>
          <View
            style={{
              flexDirection: 'column',
              marginTop: hp('10%'),
              paddingHorizontal: '5%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 19,
                    color: '#A9A9A9',
                  }}>
                  Welcome Back
                </Text>
                <Text
                  style={{
                    fontFamily: 'Roboto-Medium',
                    color: '#A9A9A9',
                    fontSize: 28,
                  }}>
                  Admin
                </Text>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/avatar.png')}
                  resizeMode="cover"
                  style={{
                    width: 55,
                    height: 55,
                    borderRadius: 25,
                    marginLeft: 15,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {/* Amount */}
              <View style={{flexDirection: 'column'}}></View>
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            flex: 2.5,
            backgroundColor: '#fff',
            paddingHorizontal: wp('5%'),
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              height: hp('15%'),
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.1)',
              elevation: 10,
              shadowColor: '#000',
              shadowRadius: 10,
              marginTop: -55,
            }}>
            <ActionCenter
              img_src={require('../../assets/images/icon/karyawan.png')}
              img_text="Driver"
              onPress={() => this.props.navigation.navigate('DriverDashboard')}
            />

            <ActionCenter
              img_src={require('../../assets/images/icon/gaji.png')}
              img_text="Gaji"
              onPress={() => this.props.navigation.navigate('GajiDashboard')}
            />
            <ActionCenter
              img_src={require('../../assets/images/icon/List.png')}
              img_text="Kendaraan"
              onPress={() =>
                this.props.navigation.navigate('kendaraanDashboard')
              }
            />
          </View>
          <Text
            style={{
              alignItems: 'center',
              marginLeft: hp('16%'),
              marginTop: 15,
            }}></Text>
        </View>
      </View>
    );
  }
}

export default Dashboard;
