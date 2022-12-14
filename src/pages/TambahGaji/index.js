import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';
import {InputData} from '../../components';
import FIREBASE from '../../config/FIREBASE';

export default class Tambahgaji extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nosim: '',
      nama: '',
      nomorHP: '',
      gaji: '',
    };
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
      this.state.gaji
    ) {
      const kontakReferensi = FIREBASE.database().ref('gajidriver');
      const kontak = {
        nosim: this.state.nosim,
        nama: this.state.nama,
        nomorHP: this.state.nomorHP,
        gaji: this.state.gaji,
      };

      kontakReferensi
        .push(kontak)
        .then((data) => {
          Alert.alert('Sukses', 'Data Gaji Driver Tersimpan');
          this.props.navigation.replace('GajiDashboard');
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
          placeholder="Masukkan Nosim"
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
          label="Gaji Driver"
          placeholder="Masukkan Gaji Driver"
          keyboardType="number-pad"
          onChangeText={this.onChangeText}
          value={this.state.gaji}
          namaState="gaji"
        />

        <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
          <Text style={styles.textTombol}>Tambah Driver</Text>
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
