import { app, BrowserWindow } from "electron";
import path from "path";
import { sendSystemStats } from "./ipcLogic.js";

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
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

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
  sendSystemStats(mainWindow);
}

app.whenReady().then(() => {
  createWindow();
});
