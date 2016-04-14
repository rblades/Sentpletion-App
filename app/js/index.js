// Javascript for index.html

let db = new PouchDB('mydb-idb');

let settingsEl = document.querySelector('.settings');
settingsEl.addEventListener('click', function () {
    ipc.send('settings-window-open');
});

let remote = require('remote');
let Tray = remote.require('tray');
let Menu = remote.require('menu');
let path = require('path');
let trayIcon = null;

if (process.platform === 'darwin') {
    trayIcon = new Tray(path.join(__dirname, 'img/mac_tray.png'));
}

else {
    trayIcon = new Tray(path.join(__dirname, 'img/tray_alt.png'));
}

let trayMenuTemplate = [
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

let trayMenu = Menu.buildFromTemplate(trayMenuTemplate);
trayIcon.setContextMenu(trayMenu);