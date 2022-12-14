import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';
import {InputData} from '../../components';
import FIREBASE from '../../config/FIREBASE';

export default class EditKontak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nosim: '',
      nama: '',
      nomorHP: '',
      alamat: '',
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('datadriver/' + this.props.route.params.id)
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let driverItem = {...data};

        this.setState({
          nosim: driverItem.nosim,
          nama: driverItem.nama,
          nomorHP: driverItem.nomorHP,
          alamat: driverItem.alamat,
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
      this.state.nosim &&
      this.state.nama &&
      this.state.nomorHP &&
      this.state.alamat
    ) {
      const kontakReferensi = FIREBASE.database().ref(
        'datadriver/' + this.props.route.params.id,
      );

      const driver = {
        nosim: this.state.nosim,
        nama: this.state.nama,
        nomorHP: this.state.nomorHP,
        alamat: this.state.alamat,
      };

      kontakReferensi
        .update(driver)
        .then((data) => {
          Alert.alert('Sukses', 'Data Driver Terupdate');
          this.props.navigation.replace('DriverDashboard');
        })
        .catch((error) => {
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
          label="No SIM Driver"
          placeholder="Masukkan No SIM"
          onChangeText={this.onChangeText}
          value={this.state.nosim}
          namaState="nosim"
        />
        <InputData
          label="Nama"
          placeholder="Masukkan Nama"
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama"
        />
        <InputData
          label="No. HP"
          placeholder="Masukkan No. HP"
          keyboardType="number-pad"
          onChangeText={this.onChangeText}
          value={this.state.nomorHP}
          namaState="nomorHP"
        />

        <InputData
          label="Alamat"
          placeholder="Masukkan Alamat"
          isTextArea={true}
          onChangeText={this.onChangeText}
          value={this.state.alamat}
          namaState="alamat"
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
