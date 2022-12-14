import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {db} from '../config/FIREBASE';
import Carddata from '../components/Carddata';
import {
  getDatabase,
  ref,
  set,
  update,
  onValue,
  remove,
  database,
  firebase,
} from 'firebase/database';
export default function List() {
  const [iddriver, setIdDriver] = useState('');
  const [nosim, setNoSim] = useState('');
  const [nama, setNama] = useState('');
  const [nohp, setNohp] = useState('');
  const [data, setData] = useState('');
  const [alamat, setAlamat] = useState('');
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  //get data product form database
  const getData = useCallback(() => {
    const urlFirebase = 'datadriver';

    database()
      .ref(urlFirebase)
      .on('value', snap => {
        if (snap) {
          const data = snap.val();
          if (data) {
            let temp = [];
            Object.keys(data).map(key => {
              return temp.push(data[key]);
            });
            setData(temp);
          } else {
            setData(null);
          }
        }
      });
  }, []);

  useEffect(() => {
    // const getDAta
    getData();
  }, [getData]);
  return (
    <View style={styles.container}>
      <Carddata data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  },
});
