import { useEffect, useState } from "react";
import Card from "../../Card";
import CircularProgressBar from "./CircularProgressBar";
import { CpuLoadData } from "../../../../types/electron";

export default function SystemInformationCard() {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const statsHandler = (CpuLoadData: CpuLoadData) => {
      setProgressValue(Number(CpuLoadData.cpuLoad.currentLoad.toFixed(2)));
    };

    window.electronAPI.onSystemStats(statsHandler);

    return () => {
      window.electronAPI.removeSystemStatsListener(statsHandler);
    };
  }, []);

  return (
    <Card>
      <div className="h-1/2 basis-1/2">
        <CircularProgressBar value={progressValue} size={"100%"} />
      </div>
    </Card>
  );
}
