import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dribbling from "./pages/IndividualTraining/Dribbling/DribblingIndex";
import IndividualTraining from "./pages/IndividualTraining/IndividualIndex";
import ConeDribbling from "./pages/IndividualTraining/Dribbling/ConeDribbling/ConeDribbling";
import SpeedDribble from "./pages/IndividualTraining/Dribbling/SpeedDribble";
import Home from "./pages/Home";
import Rehab from "./pages/Rehab";
import TeamDrills from "./pages/TeamDrills";
import InsideOutsideDribble from "./pages/IndividualTraining/Dribbling/ConeDribbling/InsideOutsideDribble";

import Navbar from "./components/Navbar";   // <<--- New
import Footer from "./components/Footer";   // <<--- New

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Navbar always at top */}
        <Navbar />

        {/* Pages here */}
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/individual-training" element={<IndividualTraining />} />
            <Route path="/individual-training/dribbling" element={<Dribbling />} />
            <Route path="/individual-training/dribbling/cone-dribbling" element={<ConeDribbling />} />
            <Route path="/individual-training/dribbling/speed-dribble" element={<SpeedDribble />} />
            <Route path="/rehab" element={<Rehab />} />
            <Route path="/individual-training/dribbling/cone-dribbling/inside-outside" element={<InsideOutsideDribble />} />
            <Route path="/team-drills" element={<TeamDrills />} />
          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
