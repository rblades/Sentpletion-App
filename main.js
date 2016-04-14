'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;
const Menu = require('Menu');

const configuration = require('./configuration');

let mainWindow = null;
let settingsWindow = null;


app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  if (!configuration.readSettings('stemAmount')) {
      configuration.saveSettings('stemAmount', ['']);
  }

  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {

    mainWindow = null;
  });

  var template = [{
    label: "Sentpletion",
    submenu: [
        { label: "Sentpletion", selector: "orderFrontStandardAboutPanel:" },
        { type: "separator" },
        { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
    ]}, {
    label: "Edit",
    submenu: [
        { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
        { label: "Redo", accelerator: "CmdOrCtrl+Y", selector: "redo:" },
        { type: "separator" },
        { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
        { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
        { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    ]}
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));

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