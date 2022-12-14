import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Cardgaji = ({id, gajiItem, navigation, removeData}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DetailGaji', {id: id})}>
      <View>
        <Text style={styles.nama}>{gajiItem.nama}</Text>
        <Text style={styles.noHP}>Gaji Driver : {gajiItem.gaji}</Text>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditGaji', {id: id})}
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'white',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 16,
            }}>
            ✏️
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => removeData(id)}
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'white',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 16,
            }}>
            ❌
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Cardgaji;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  noHP: {
    fontSize: 12,
    color: 'gray',
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
