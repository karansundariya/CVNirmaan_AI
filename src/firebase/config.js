import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';


const firebaseConfig = {
  apiKey: "AIzaSyCai90r34dTcGXwe6ZHN8JoUgjkdbSmmrU",
  authDomain: "ai-resume-maker-14685.firebaseapp.com",
  projectId: "ai-resume-maker-14685",
  storageBucket: "ai-resume-maker-14685.firebasestorage.app",
  messagingSenderId: "866066251732",
  appId: "1:866066251732:web:c76386cbb84afbcd636041",
  measurementId: "G-WRF16QB23G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app); 

export default app;
