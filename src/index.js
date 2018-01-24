const events = require('events')
const {
    remote
} = require('electron')

window.events = new events.EventEmitter()

window.onbeforeunload = function (e) {
    if (process.platform === 'win32') return true
    if (!remote.getGlobal('quitting')) return false
}

function ready() {
    require('editor')
    require('menu')
    window.localStorage.setItem('binMode', 'false')

}



document.addEventListener('DOMContentLoaded', ready)