import { HashRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          <AppRoutes /> {/* Import centralized routes */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;