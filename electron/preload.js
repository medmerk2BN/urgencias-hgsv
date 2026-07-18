const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
  print: (opts) => ipcRenderer.invoke('print', opts || {})
});
