// Javascript for settings.html

'use strict';

var ipc = require('ipc');
var configuration = require('../configuration');

var closeEl = document.querySelector('.close');

closeEl.addEventListener('click', function (e) {
    ipc.send('settings-window-closed');
});

function stemAmount(input) {
    if (input.value < 2) input.value = 2;
    if (input.value > 10) input.value = 10;
}

function dateNotify(input, button) {

}