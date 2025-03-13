import Card from "../../Card";
import CircularProgressBar from "./CircularProgressBar";

export default function SystemInformationCard() {
  const progressValue = 65;
  return (
    <Card>
      <div className="h-1/2 basis-1/2">
        <CircularProgressBar value={progressValue} size={"100%"} />
      </div>
    </Card>
  );
}
