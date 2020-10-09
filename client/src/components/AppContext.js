import React, { createContext, useEffect, useState } from "react";

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

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
