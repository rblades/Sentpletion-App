// Javascript for settings.html

'use strict';

var ipc = require('ipc');
var closeEl = document.querySelector('.close');
closeEl.addEventListener('click', function (e) {
    ipc.send('settings-window-closed');
});