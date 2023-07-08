import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB8kAHSaxqtvI9l0M_QZ83--8mHCck3JWQ",
  authDomain: "e-shop-auth-ad199.firebaseapp.com",
  projectId: "e-shop-auth-ad199",
  storageBucket: "e-shop-auth-ad199.appspot.com",
  messagingSenderId: "760245282387",
  appId: "1:760245282387:web:1ba525de1eeba3d24448a6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)