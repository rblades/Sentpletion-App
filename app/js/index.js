// Javascript for index.html

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const ipcMain = electron.ipcMain;
const ipcRenderer = electron.ipcRenderer
const remote = require('remote');
const Tray = remote.require('tray');
const Menu = remote.require('menu');
const path = require('path');

let trayIcon = null;

let db = new PouchDB('mydb-idb');

let settingsEl = document.querySelector('.settings');
settingsEl.addEventListener('click', function () {
    ipcMain.send('settings-window-open');
});

if (process.platform === 'darwin') {
    trayIcon = new Tray(path.join(__dirname, 'img/icon.png'));
}

else {
    trayIcon = new Tray(path.join(__dirname, 'img/icon-alt.png'));
}

let trayMenuTemplate = [
    {
        label: 'Sentpletion',
        enabled: false
    },
    {
        label: 'Settings',
        click: function () {
            ipcMain.send('settings-window-open');
        }
    },
    {
        label: 'Close',
        click: function () {
            ipcMain.send('settings-window-closed');
        }
    }
];

let trayMenu = Menu.buildFromTemplate(trayMenuTemplate);
trayIcon.setContextMenu(trayMenu);