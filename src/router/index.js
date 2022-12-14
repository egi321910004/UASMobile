import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  Home,
  TambahKontak,
  DetailKontak,
  EditKontak,
  Login,
  Dashboard,
  DriverDashboard,
  Gaji,
  Cuti,
  Absensi,
  GajiDashboard,
  Tambahgaji,
} from '../pages';
import DetailGaji from '../pages/DetailGaji';
import EditGaji from '../pages/EditGaji';
import KendaraanDashboard from '../pages/KendaraanDashboard';
import TambahKendaraan from '../pages/TambahKendaraan';
import DetailKendaraan from '../pages/DetailKendaraan';
import EditKendaraan from '../pages/EditKendaraan';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GajiDashboard"
        component={GajiDashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TambahGaji"
        component={Tambahgaji}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit Kendaraan"
        component={EditKendaraan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DriverDashboard"
        component={DriverDashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Gaji"
        component={Gaji}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cuti"
        component={Cuti}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KendaraanDashboard"
        component={KendaraanDashboard}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TambahKontak"
        component={TambahKontak}
        options={{title: 'Tambah Driver'}}
      />
      <Stack.Screen
        name="DetailKontak"
        component={DetailKontak}
        options={{title: 'Detail Driver'}}
      />
      <Stack.Screen
        name="EditKontak"
        component={EditKontak}
        options={{title: 'Edit Driver'}}
      />
      <Stack.Screen
        name="DetailGaji"
        component={DetailGaji}
        options={{title: 'Detail Gaji'}}
      />
      <Stack.Screen
        name="DetailKendaraan"
        component={DetailKendaraan}
        options={{title: 'Detail Kendaraan'}}
      />
      <Stack.Screen
        name="EditGaji"
        component={EditGaji}
        options={{title: 'Edit Gaji'}}
      />
      <Stack.Screen
        name="kendaraanDashboard"
        component={KendaraanDashboard}
        options={{title: 'Dashboard Kendaraan'}}
      />
      <Stack.Screen
        name="TambahKendaraan"
        component={TambahKendaraan}
        options={{title: 'Tambah Kendaraan'}}
      />
      <Stack.Screen
        name="EditKendaraan"
        component={EditKendaraan}
        options={{title: 'Edit Kendaraan'}}
      />
    </Stack.Navigator>
  );
};

export default Router;
