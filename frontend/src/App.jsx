import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Addplantform from "./components/Addplantform";

function App() {
  return (
    <Router>
      <div className="bg-green-100 min-h-screen">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Addplantform />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
