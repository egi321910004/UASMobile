import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import FIREBASE from '../../config/FIREBASE';
import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default class DetailKendaraan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      driver: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('kendaraan/' + this.props.route.params.id)
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
        <Text>No Stnk : </Text>
        <Text style={styles.text}>{driver.nostnk} </Text>

        <Text>Nama : </Text>
        <Text style={styles.text}>{driver.nama} </Text>

        <Text>Tipe : </Text>
        <Text style={styles.text}>{driver.tipe} </Text>

        <Text>Merek : </Text>
        <Text style={styles.text}>{driver.merek} </Text>
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
