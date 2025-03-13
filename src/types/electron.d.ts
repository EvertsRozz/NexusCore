export type CpuLoadData = {
  cpuLoad: CpuLoad;
};

export type CpuLoad = {
  avgLoad: number;
  currentLoad: number;
  currentLoadUser: number;
  currentLoadSystem: number;
  currentLoadNice: number;
  currentLoadIdle: number;
  currentLoadIrq: number;
  currentLoadSteal: number;
  currentLoadGuest: number;
  rawCurrentLoad: number;
  rawCurrentLoadUser: number;
  rawCurrentLoadSystem: number;
  rawCurrentLoadNice: number;
  rawCurrentLoadIdle: number;
  rawCurrentLoadIrq: number;
  rawCurrentLoadSteal: number;
  rawCurrentLoadGuest: number;
  cpus: Cpus[];
};

export type Cpus = {
  load: number;
  loadUser: number;
  loadSystem: number;
  loadNice: number;
  loadIdle: number;
  loadIrq: number;
  loadSteal: number;
  loadGuest: number;
  rawLoad: number;
  rawLoadUser: number;
  rawLoadSystem: number;
  rawLoadNice: number;
  rawLoadIdle: number;
  rawLoadIrq: number;
  rawLoadSteal: number;
  rawLoadGuest: number;
};

declare global {
  interface Window {
    electronAPI: {
      onSystemStats: (cb: (systemStats: SystemStats) => void) => void;
      removeSystemStatsListener: (
        cb: (systemStats: SystemStats) => void,
      ) => void;
    };
  }
}

export {};
