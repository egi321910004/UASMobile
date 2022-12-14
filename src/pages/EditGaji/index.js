import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';
import {InputData} from '../../components';
import FIREBASE from '../../config/FIREBASE';

export default class EditGaji extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nosim: '',
      nama: '',
      nomorHP: '',
      gaji: '',
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('gajidriver/' + this.props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let driverItem = {...data};

        this.setState({
          nosim: driverItem.nosim,
          nama: driverItem.nama,
          nomorHP: driverItem.nomorHP,
          gaji: driverItem.gaji,
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
      this.state.gaji
    ) {
      const kontakReferensi = FIREBASE.database().ref(
        'gajidriver/' + this.props.route.params.id,
      );

      const driver = {
        nosim: this.state.nosim,
        nama: this.state.nama,
        nomorHP: this.state.nomorHP,
        gaji: this.state.gaji,
      };

      kontakReferensi
        .update(driver)
        .then(data => {
          Alert.alert('Sukses', 'Data Driver Terupdate');
          this.props.navigation.replace('GajiDashboard');
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
          label="Gaji"
          placeholder="Masukkan Gaji"
          isTextArea={true}
          onChangeText={this.onChangeText}
          value={this.state.gaji}
          namaState="gaji"
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
