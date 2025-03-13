import si from "systeminformation";

export async function getSystemStats() {
  const cpuLoad = await si.currentLoad();

  console.log(cpuLoad);
  return {
    cpuLoad,
  };
}

getSystemStats();
