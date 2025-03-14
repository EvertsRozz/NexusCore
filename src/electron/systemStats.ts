import si from "systeminformation";

export async function getSystemStats() {
  const cpuLoad = await si.currentLoad();

  return {
    cpuLoad,
  };
}

getSystemStats();
