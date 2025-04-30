import { auth } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { getUserRole } from "../services/userService";

const PremiumTraining = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      getUserRole(auth.currentUser.uid).then(setRole);
    }
  }, []);

  return (
    <div>
      <h2>🔥 Premium Training Section</h2>
      {role === "premium" ? (
        <p>Welcome! Here, you get **exclusive drills, tactical breakdowns, and advanced strategies.**</p>
      ) : (
        <p>🚫 You need **Premium access** to view this section.</p>
      )}
    </div>
  );
};

export default PremiumTraining;