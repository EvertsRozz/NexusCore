import { app, BrowserWindow } from "electron";
import path from "path";

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile(path.join(app.getAppPath(), "/dist/react/index.html"));
});
