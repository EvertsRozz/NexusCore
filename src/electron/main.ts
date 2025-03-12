import { app, BrowserWindow } from "electron";
import path from "path";

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile(path.join(app.getAppPath(), "/dist/react/index.html"));
});
