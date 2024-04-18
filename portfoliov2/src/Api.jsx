import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkQnoH5PL7gbVzRezQcqiR9fXj3Z9yFMY",
  authDomain: "portfolio-website-331f9.firebaseapp.com",
  projectId: "portfolio-website-331f9",
  storageBucket: "portfolio-website-331f9.appspot.com",
  messagingSenderId: "439501457367",
  appId: "1:439501457367:web:dffe799a5ca5b7e1e16d92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const projectsRef = collection(db, "projects");

export async function getProjects() {
  const snapshot = await getDocs(projectsRef);
  const data = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return data;
}