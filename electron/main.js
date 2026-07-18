const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 900,
    minWidth: 960,
    minHeight: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    title: 'Urgencias HGSV'
  });
  win.loadFile(path.join(__dirname, '../src/index.html'));
  Menu.setApplicationMenu(null);
}

ipcMain.handle('print', async (event, opts) => {
  return new Promise((resolve) => {
    if (!win) { resolve({ success: false, reason: 'no window' }); return; }
    win.webContents.print(opts || {}, (success, reason) => {
      resolve({ success, reason: reason || null });
    });
  });
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
