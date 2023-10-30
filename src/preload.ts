const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('contextBridge', {
  versions: {
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron,
  },
  process,

  // You never want to directly expose the entire ipcRenderer module via preload. This would give your renderer the ability to send arbitrary IPC messages to the main process, which becomes a powerful attack vector for malicious code.
  ping: () => ipcRenderer.invoke('ping'),
});
