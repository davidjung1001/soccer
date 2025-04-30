import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const isPremiumUser = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, "users", uid));
    return userDoc.exists() && userDoc.data().role === "premium";
  } catch (error) {
    console.error("Error checking premium status:", error.message);
    return false;
  }
};

export const upgradeToPremium = async (uid) => {
  try {
    await setDoc(doc(db, "users", uid), { role: "premium" }, { merge: true });
    console.log("User upgraded to Premium");
  } catch (error) {
    console.error("Error upgrading user:", error.message);
  }
};