import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <div className="flex h-screen max-h-screen flex-col">
      <Navbar />

      <div className="h-full min-h-0 flex-1">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
