// Javascript for settings.html

'use strict';

const ipcMain = electron.ipcMain;
const configuration = require('../configuration');
const notifier = require('../node-notifier');
const path = require('path');

let closeEl = document.querySelector('.close');

closeEl.addEventListener('click', function (e) {
    ipc.send('settings-window-closed');
});

function stemAmount(input) {
  if (input.value < 2) input.value = 2;
  if (input.value > 10) input.value = 10;
}

function timeNotify(input, button) {
  input
}

function twoNotify(input) {
  if (input.bootstrapToggle(on)) {

  }
  
  if (input.bootstrapToggle(off)){

  }
}

notifier.notify({
  title: 'Reminder!',
  message: 'Time to do your daily sentence completion exercises',
  icon: path.join(__dirname, 'tray.png'), // Absolute path (doesn't work on balloons)
  sound: true, // Only Notification Center or Windows Toasters
  wait: false // Wait with callback, until user action is taken against notification
}, function (err, response) {
  // Response is response from notification
});

notifier.on('click', function (notifierObject, options) {
  // Triggers if `wait: true` and user clicks notification
});

notifier.on('timeout', function (notifierObject, options) {
  // Triggers if `wait: true` and notification closes
});