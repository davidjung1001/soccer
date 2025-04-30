import { db } from "../firebase/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const assignUserRole = async (uid, role) => {
  try {
    await setDoc(doc(db, "users", uid), { role });
    console.log(`User role assigned: ${role}`);
  } catch (error) {
    console.error("Error assigning role:", error.message);
  }
};

export const getUserRole = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, "users", uid));
    return userDoc.exists() ? userDoc.data().role : null;
  } catch (error) {
    console.error("Error fetching user role:", error.message);
    return null;
  }
};