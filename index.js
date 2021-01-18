const { Terminal } = require("xterm");
const ipc = require("electron").ipcRenderer;
const { FitAddon } = require("xterm-addon-fit");

var term = new Terminal();
var fit = new FitAddon();
term.loadAddon(fit);
term.open(document.getElementById("terminal"));

term.onData((e) => {
  //   term.write(e);
  ipc.send("terminal.toTerm", e);
});

ipc.on("terminal.incData", function (event, data) {
  term.write(data);
});

fit.fit();
