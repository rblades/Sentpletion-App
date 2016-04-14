// Javascript for index.html

var db = new PouchDB('mydb-idb');

var settingsEl = document.querySelector('.settings');
settingsEl.addEventListener('click', function () {
    ipc.send('settings-window-open');
});

var remote = require('remote');
var Tray = remote.require('tray');
var Menu = remote.require('menu');
var path = require('path');
var trayIcon = null;

if (process.platform === 'darwin') {
    trayIcon = new Tray(path.join(__dirname, 'img/mac_tray.png'));
}

else {
    trayIcon = new Tray(path.join(__dirname, 'img/tray_alt.png'));
}

var trayMenuTemplate = [
    {
        label: 'Sentpletion',
        enabled: false
    },
    {
        label: 'Settings',
        click: function () {
            ipc.send('settings-window-open');
        }
    },
    {
        label: 'Quit',
        click: function () {
            ipc.send('settings-window-closed');
        }
    }
];

var trayMenu = Menu.buildFromTemplate(trayMenuTemplate);
trayIcon.setContextMenu(trayMenu);