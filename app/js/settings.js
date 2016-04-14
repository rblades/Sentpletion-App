// Javascript for settings.html

'use strict';

const ipcMain = electron.ipcMain;
const configuration = require('../configuration');

let closeEl = document.querySelector('.close');

closeEl.addEventListener('click', function (e) {
    ipc.send('settings-window-closed');
});

function stemAmount(input) {
    if (input.value < 2) input.value = 2;
    if (input.value > 10) input.value = 10;
}

function dateNotify(input, button) {

}

function twoNotify(input) {
  if (input.on) {

  }
  
  if (input.off){
    
  }
}