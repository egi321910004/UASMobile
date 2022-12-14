import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
// import FIREBASE from '../../config/FIREBASE';
import FIREBASE from '../../config/FIREBASE';
import CardKontak from '../../components/CardKontak';
import Bg from '../../assets/images/bg2.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Cardgaji from '../../components/Cardgaji';
export default class GajiDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gajis: {},
      gajisKey: [],
    };
  }

  componentDidMount() {
    this.ambilData();
  }

  ambilData = () => {
    FIREBASE.database()
      .ref('gajidriver')
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let gajiItem = {...data};

        this.setState({
          gajis: gajiItem,
          gajisKey: Object.keys(gajiItem),
        });
      });
  };

  removeData = id => {
    Alert.alert(
      'Info',
      'Anda yakin akan menghapus Data Kontak ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            FIREBASE.database()
              .ref('gajidriver/' + id)
              .remove();
            this.ambilData();
            Alert.alert('Hapus', 'Sukses Hapus Data');
          },
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    const {gajis, gajisKey} = this.state;
    return (
      <View style={styles.page}>
        <ImageBackground source={Bg} style={{}}>
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
                    fontFamily: 'Roboto-Medium',
                    color: '#A9A9A9',
                    fontSize: 28,
                  }}>
                  Mastering Gaji Driver
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

        <View style={styles.listKontak}>
          {gajisKey.length > 0 ? (
            gajisKey.map(key => (
              <Cardgaji
                key={key}
                gajiItem={gajis[key]}
                id={key}
                {...this.props}
                removeData={this.removeData}
              />
            ))
          ) : (
            <Text>Daftar Kosong</Text>
          )}
        </View>

        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.btnTambah}
            onPress={() => this.props.navigation.navigate('TambahKendaraan')}>
            <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  garis: {
    borderWidth: 1,
    marginTop: 10,
  },
  listKontak: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  wrapperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnTambah: {
    padding: 20,
    backgroundColor: 'skyblue',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
