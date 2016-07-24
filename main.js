const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

// const configuration = require('./configuration');

let mainWindow = null;
let settingsWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  // if (!configuration.readSettings('stemAmount')) {
  //     configuration.saveSettings('stemAmount', ['']);
  // }

  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {

    mainWindow = null;
  });

});

ipcMain.on('settings-window-open', function () {
    if (settingsWindow) {
        return;
    }
    settingsWindow = new BrowserWindow({width: 600, height: 350});
    settingsWindow.loadURL('file://' + __dirname + '/app/settings.html');
    settingsWindow.on('closed', function () {
        settingsWindow = null;
    });
});

ipcMain.on('settings-window-closed', function () {
    if (settingsWindow) {
        settingsWindow.close();
    }
});