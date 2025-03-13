import { BrowserWindow } from "electron";
import { getSystemStats } from "./systemStats.js";

export function sendSystemStats(win: BrowserWindow) {
  setInterval(async () => {
    const systemStats = await getSystemStats();
    win.webContents.send("systemStats", systemStats);
  }, 2000);
}
