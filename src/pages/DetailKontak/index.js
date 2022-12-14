import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import FIREBASE from '../../config/FIREBASE';
import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default class DetailKontak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      driver: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('datadriver/' + this.props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let driverItem = {...data};

        this.setState({
          driver: driverItem,
        });
      });
  }

  render() {
    const {driver} = this.state;
    return (
      <View style={styles.pages}>
        <Text>No SIM : </Text>
        <Text style={styles.text}>{driver.nosim} </Text>

        <Text>Nama : </Text>
        <Text style={styles.text}>{driver.nama} </Text>

        <Text>Nomor HP : </Text>
        <Text style={styles.text}>{driver.nomorHP} </Text>

        <Text>Alamat : </Text>
        <Text style={styles.text}>{driver.alamat} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    margin: 30,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
