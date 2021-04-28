// Importing Components
import Hero from "./Components/Hero";
import Email from "./Components/Email";
import Navbar from "./Components/Navbar";
import SideSocial from "./Components/SideSocial";
import { LineL, LineR } from "./Components/Line";

function App() {
  return (
    <div className="h-screen bg-navy">
      <Navbar />
      <Hero />
      <Email className=" bg-navy" />
      <LineR />
      <SideSocial />
      <LineL />
    </div>
  );
}

export default App;
