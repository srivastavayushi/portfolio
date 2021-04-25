import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Contact />
      <Home />
    </div>
  );
}

export default App;
