import PushNotification from 'react-native-push-notification';

class Notifications {
  constructor() {
    PushNotification.configure({
      onRegister: function (token) {
        // console.log('TOKEN:', token);
      },

      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },

      popInitialNotification: true,

      requestPermissions: false,
    });

    PushNotification.createChannel(
      {
        channelId: 'reminders',

        channelName: 'Task reminder notifications',

        channelDescription: 'Reminder for tasks',
      },

      () => {},
    );

    PushNotification.getScheduledLocalNotifications(rn => {
      console.log('SN --- ', rn);
    });
  }

  scheduleNotification(date) {
    PushNotification.localNotificationSchedule({
      channelId: 'reminders',

      title: '🔔 Reminder!',

      message: 'learn React Native',

      date,
    });
  }
}

export default new Notifications();
