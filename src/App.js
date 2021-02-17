import React from "react";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div className="loading-error-wrapper">
        <h2 className="loading">Loading...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="loading-error-wrapper">
        <h2 className="error">ERROR! {error}</h2>
      </div>
    );
  } else {
    return user ? <HomePage user={user} /> : <LandingPage />;
  }
}

export default App;
