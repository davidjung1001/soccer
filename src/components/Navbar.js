import { auth } from "../firebase/firebaseConfig";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../services/authService";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Clean up listener
  }, []);

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/">🏠 Home</Link>
      <Link to="/tactical-masterclass">⚽ Tactical Masterclass</Link>

      {user ? (
        <div className="flex items-center gap-4">
          <span>Welcome, {user.email}!</span>
          <button onClick={logoutUser} className="px-3 py-2 bg-red-500 rounded">Log Out</button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link to="/login" className="px-3 py-2 bg-blue-500 rounded">Login</Link>
          <Link to="/register" className="px-3 py-2 bg-green-500 rounded">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;