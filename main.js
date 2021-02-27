const { app, BrowserWindow, ipcMain } = require('electron');
const os = require('os');
const pty = require('node-pty');

var shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';
function createWindow() {
  const win = new BrowserWindow({
    minWidth: 370,
    minHeight: 190,
    frame: process.platform === 'darwin',
    transparent: process.platform === 'darwin',
    webPreferences: {
      nodeIntegration: true,
      navigateOnDragDrop: true,
      enableRemoteModule: true,
    },
    icon: './icons/terminex-dark-circle.png',
  });

  win.removeMenu();
  var ptyprocess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 100,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env,
  });

  ptyprocess.on('data', function (data) {
    win.webContents.send('terminal.incData', data);
  });

  ipcMain.on('terminal.toTerm', function (event, data) {
    ptyprocess.write(data);
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
