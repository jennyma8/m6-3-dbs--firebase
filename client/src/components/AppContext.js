import React, { createContext, useEffect, useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase";
import "firebase/auth";

export const AppContext = createContext(null);

var firebaseConfig = {
  apiKey: "AIzaSyAyoASo9MqvyH_YJNWH4A1iBHwoIP04o0E",
  authDomain: "user-app-a0a0d.firebaseapp.com",
  databaseURL: "https://user-app-a0a0d.firebaseio.com",
  projectId: "user-app-a0a0d",
  storageBucket: "user-app-a0a0d.appspot.com",
  messagingSenderId: "944220933103",
  appId: "1:944220933103:web:d9dfa797cf9671ca8d841a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const AppProvider = ({ children, signInWithGoogle, user }) => {
  const [appUser, setAppUser] = useState({});

  useEffect(() => {
    if (user) {
      setAppUser({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  return (
    <AppContext.Provider value={{ appUser, signInWithGoogle }}>
      {children}
    </AppContext.Provider>
  );
};

// export default AppProvider;
export default withFirebaseAuth({ providers, firebaseAppAuth })(AppProvider);
