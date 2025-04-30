import { auth } from "../../../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { getUserRole } from "../../../services/userService";
import { Navigate } from "react-router-dom";

const InsideOutsideDribble = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      getUserRole(auth.currentUser.uid).then(setRole);
    }
  }, []);

  if (role === null) return <p>Loading...</p>;
  if (role !== "premium") return <Navigate to="/upgrade" />; // Redirect non-premium users

  return (
    <div className="p-6 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold">Inside-Outside Dribble</h1>

      {/* Embedded Video - Updated Path */}
      <video className="w-full h-64 rounded-lg shadow-lg mt-4" controls>
        <source src={`${process.env.PUBLIC_URL}/videos/inside-outside-dribble.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p className="mt-6 text-lg text-gray-700">This drill improves foot control and ball movement efficiency.</p>

      <h2 className="text-2xl font-semibold mt-6">Steps:</h2>
      <ul className="mt-4 text-left space-y-2">
        <li>1️⃣ Place cones in a straight line 1 meter apart.</li>
        <li>2️⃣ Dribble using the **inside** of your foot to weave through cones.</li>
        <li>3️⃣ As you pass each cone, quickly switch to the **outside** of the foot.</li>
        <li>4️⃣ Keep control and accelerate at the last cone.</li>
        <li>5️⃣ Repeat for 5 sets, improving speed each time.</li>
      </ul>

      <a href="/individual-training/dribbling/cone-dribbling" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
        Back to Cone Dribbling
      </a>
    </div>
  );
};

export default InsideOutsideDribble;