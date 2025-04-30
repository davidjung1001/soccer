import { useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { getUserRole } from "../services/userService";
import { Navigate } from "react-router-dom";

const PremiumRoute = ({ children }) => {
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);
  
      if (currentUser) {
        console.log("User detected:", currentUser.uid); // ✅ Debugging step
        try {
          const retrievedRole = await getUserRole(currentUser.uid);
          console.log("User Role Retrieved:", retrievedRole); // ✅ Debugging step
          setRole(retrievedRole);
        } catch (error) {
          console.error("Error retrieving role:", error.message);
          setRole("guest"); // Prevent it from staying in loading state
        }
      } else {
        console.log("No authenticated user found. Setting role to 'guest'.");
        setRole("guest"); // Ensure guests don’t get stuck in loading
      }
    });
  
    return () => unsubscribe();
  }, []);

  if (role === null) return <p>Loading...</p>;
  
  return role === "premium" ? (
    children // ✅ Show premium content
  ) : (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold">🔒 Premium Content</h2>
      <p className="mt-4 text-lg">This section is only available to premium members.</p>
      <a href="/upgrade" className="mt-6 inline-block bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
        Upgrade to Premium
      </a>
    </div>
  );
};

export default PremiumRoute;