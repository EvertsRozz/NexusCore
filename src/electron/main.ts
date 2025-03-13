import { app, BrowserWindow } from "electron";
import path from "path";
import { sendSystemStats } from "./ipcLogic.js";

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(app.getAppPath(), "/dist/electron/preload.mjs"),
      contextIsolation: true,
      sandbox: false,
    },
  });

  mainWindow.loadFile(path.join(app.getAppPath(), "/dist/react/index.html"));

  sendSystemStats(mainWindow);
});
