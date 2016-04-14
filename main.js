'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipc;

var configuration = require('./configuration');

var mainWindow = null;
var settingsWindow = null;


app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  if (!configuration.readSettings('shortcutKeys')) {
      configuration.saveSettings('shortcutKeys', ['ctrl', 'shift']);
  }

  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {

    mainWindow = null;
  });
});

ipc.on('settings-window-open', function () {
    if (settingsWindow) {
        return;
    }
    settingsWindow = new BrowserWindow({width: 400, height: 300});
    settingsWindow.loadUrl('file://' + __dirname + '/app/settings.html');
    settingsWindow.on('closed', function () {
        settingsWindow = null;
    });
});

ipc.on('settings-window-closed', function () {
    if (settingsWindow) {
        settingsWindow.close();
    }
});