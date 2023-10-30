const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // TODO - Make this conditional based on initialization logic
  // https://www.electronjs.org/docs/latest/tutorial/application-debugging
  win.webContents.openDevTools();

  win.loadFile('index.html');
};

const logger = () => {
  const { platform } = require('process');
  console.log('platform', platform);
};

app.whenReady().then(() => {
  createWindow();
  logger();

  // Because windows cannot be created before the `ready` event, you should only listen for `activate` events after your app is initialized.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
