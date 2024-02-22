import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZ3OyCbR3KrYrfILgdVz0gmQN9-Pk0_ZM",
  authDomain: "moviesverse-ec536.firebaseapp.com",
  projectId: "moviesverse-ec536",
  storageBucket: "moviesverse-ec536.appspot.com",
  messagingSenderId: "613750862187",
  appId: "1:613750862187:web:9f07dd3539faa35f6f9c2e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
