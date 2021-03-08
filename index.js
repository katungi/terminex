const { Terminal } = require('xterm');
const ipc = require('electron').ipcRenderer;
const { FitAddon } = require('xterm-addon-fit');
const customTitlebar = require('custom-electron-titlebar');
const { Themebar } = require('custom-electron-titlebar');

new customTitlebar.Titlebar({
  backgroundColor: customTitlebar.Color.fromHex('#000'),
  drag: true,
  minimizable: true,
  maximizable: true,
  closeable: true,
  menu: false,
  iconsTheme: Themebar.mac,
  overflow: 'hidden',
  unfocusEffect: true,
  icon: './icons/terminex-dark-circle-outline.png',
});

var term = new Terminal({
  cursorBlink: true,
  cursorStyle: 'block',
  fastScrollModifier: 'ctrl',
  logLevel: 'info',
  rightClickSelectsWord: true,
  screenReaderMode: true,
  scrollback: 6,
  bellSound: './images/bell.mp3',
});

var fit = new FitAddon();
term.loadAddon(fit);
fit.activate;
term.open(document.getElementById('terminal'));
fit.fit();
term.onData((e) => {
  ipc.send('terminal.toTerm', e);
});

ipc.on('terminal.incData', function (event, data) {
  term.write(data);
});
