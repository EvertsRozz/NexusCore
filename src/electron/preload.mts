import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  onSystemStats: (cb: any) => {
    ipcRenderer.on("systemStats", (_, systemStats) => cb(systemStats));
  },
  removeSystemStatsListener: (cb: any) => {
    ipcRenderer.removeListener("systemStats", cb);
  },
});
