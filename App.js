import React from 'react';

import {Button, StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Notifications from './Notifications';

const App = () => {
  const [date, setDate] = React.useState(new Date());

  const setNotification = () => {
    Notifications.scheduleNotification(date);

    // Notifications.scheduleNotification(new Date(Date.now() + 5 * 1000));
  };

  return (
    <View style={styles.container}>
      <DatePicker date={date} onDateChange={setDate} />
      <View style={styles.wrapper} />
      <Button title="Set notification" onPress={setNotification} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    height: 60,
  },
});
