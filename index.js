const { Terminal } = require("xterm");
const ipc = require("electron").ipcRenderer;
var term = new Terminal();
term.open(document.getElementById("terminal"));
term.onData((e) => {
  //   term.write(e);
  ipc.send("terminal.toTerm", e);
});

ipc.on("terminal.incData", function (event, data) {
  term.write(data);
});
