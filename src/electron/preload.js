const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  downloadPreview: async (url) =>
    ipcRenderer.invoke('downloader:preview', url),
});
