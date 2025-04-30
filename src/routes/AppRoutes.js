import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import IndividualTraining from "../pages/IndividualTraining/IndividualIndex";
import Dribbling from "../pages/IndividualTraining/Dribbling/DribblingIndex";
import ConeDribbling from "../pages/IndividualTraining/Dribbling/ConeDribbling";
import SpeedDribble from "../pages/IndividualTraining/Dribbling/SpeedDribble";
import InsideOutsideDribble from "../pages/IndividualTraining/Dribbling/InsideOutsideDribble";
import TacticalMasterclass from "../pages/TacticalMasterclass/TacticalMasterclass";
import Formations from "../pages/TacticalMasterclass/Formations/Formations";
import ByPosition from "../pages/TacticalMasterclass/ByPositions/ByPosition";
import Rehab from "../pages/Rehab";
import TeamDrills from "../pages/TeamDrills";
import PremiumTraining from "../pages/PremiumTraining"; // ✅ Ensure this exists
import PremiumRoute from "./PremiumRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tactical-masterclass" element={<TacticalMasterclass />} />
      <Route path="/tactical-masterclass/formations" element={<Formations />} />
      <Route path="/tactical-masterclass/by-positions" element={<ByPosition />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/individual-training" element={<IndividualTraining />} />
      <Route path="/individual-training/dribbling" element={<Dribbling />} />
      <Route path="/individual-training/dribbling/cone-dribbling" element={<ConeDribbling />} />
      <Route path="/individual-training/dribbling/speed-dribble" element={<SpeedDribble />} />
      <Route path="/individual-training/dribbling/cone-dribbling/inside-outside" element={<PremiumRoute><InsideOutsideDribble /></PremiumRoute>} />

      <Route path="/rehab" element={<Rehab />} />
      <Route path="/team-drills" element={<TeamDrills />} />

      {/* ✅ Premium content (Protected Route) */}
      <Route path="/premium-training" element={<PremiumRoute><PremiumTraining /></PremiumRoute>} />
    </Routes>
  );
};

export default AppRoutes;