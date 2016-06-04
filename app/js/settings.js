// Javascript for settings.html

'use strict';

const configuration = require('./configuration');
const notifier = require('node-notifier');

let closeEl = document.querySelector('.close');

closeEl.addEventListener('click', function (e) {
    ipcRenderer.send('settings-window-closed');
});

function stemAmount(input) {
  if (input.value < 2) input.value = 2;
  if (input.value > 10) input.value = 10;
}

document.getElementById("stem").onblur=checkMandator;

function checkMandatory() {
  if ((this.value.length < 2) && (this.value.length > 10)) {
     this.parentNode.setAttribute("style",
"background-color: #ffcccc");
     this.setAttribute("aria-invalid", "true");
     generateAlert("Please set between 2 to 10 stems to get the full effect of sentence completion exercises.");
  }
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