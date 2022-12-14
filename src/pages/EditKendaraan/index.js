import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';
import {InputData} from '../../components';
import FIREBASE from '../../config/FIREBASE';

export default class EditKendaraan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nostnk: '',
      nama: '',
      tipe: '',
      merek: '',
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('kendaraan/' + this.props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let driverItem = {...data};

        this.setState({
          nostnk: driverItem.nostnk,
          nama: driverItem.nama,
          tipe: driverItem.tipe,
          merek: driverItem.merek,
        });
      });
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if (
      this.state.nostnk &&
      this.state.nama &&
      this.state.tipe &&
      this.state.merek
    ) {
      const kontakReferensi = FIREBASE.database().ref(
        'kendaraan/' + this.props.route.params.id,
      );

      const driver = {
        nostnk: this.state.nostnk,
        nama: this.state.nama,
        tipe: this.state.tipe,
        merek: this.state.merek,
      };

      kontakReferensi
        .update(driver)
        .then(data => {
          Alert.alert('Sukses', 'Data Kendaraan Terupdate');
          this.props.navigation.replace('KendaraanDashboard');
        })
        .catch(error => {
          console.log('Error : ', error);
        });
    } else {
      Alert.alert('Error', 'Nama, Nomor HP, dan Alamat wajib diisi');
    }
  };

  render() {
    return (
      <View style={styles.pages}>
        <InputData
          label="No STNK"
          placeholder="Masukkan No STNK"
          onChangeText={this.onChangeText}
          value={this.state.nostnk}
          namaState="nostnk"
        />
        <InputData
          label="Nama"
          placeholder="Masukkan Nama"
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama"
        />
        <InputData
          label="Tipe"
          placeholder="Masukkan Tipe Kendaraan"
          keyboardType="number-pad"
          onChangeText={this.onChangeText}
          value={this.state.tipe}
          namaState="tipe"
        />

        <InputData
          label="Merek Kendaraan"
          placeholder="Masukkan Merek Kendaraan"
          isTextArea={true}
          onChangeText={this.onChangeText}
          value={this.state.merek}
          namaState="merek"
        />

        <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
          <Text style={styles.textTombol}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  tombol: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
