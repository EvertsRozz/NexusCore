// import Card from "./Card";
import SystemInformationCard from "./Cards/SystemInformation/SystemInformationCard";
import GridContentContainer from "./GridContentContainer";

export default function Dashboard() {
  return (
    <>
      <GridContentContainer>
        <SystemInformationCard />
      </GridContentContainer>
    </>
  );
}
