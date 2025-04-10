import React, { useState, useEffect } from "react";
import Card from "./Card";
import MyFooter from "./Footer";
import ButtonMeh from "./button-click";
import background from "./assets/mainbackground.jpg";
import Login from "./Login";

const styles: React.CSSProperties = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: -1,
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Clear session
    setIsLoggedIn(false); // Update state
  };

  return (
    <>
      {/* Background layer */}
      <div style={styles}></div>

      {/* Foreground content */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {isLoggedIn ? (
          <>
            <Card />
            <ButtonMeh />
            <MyFooter />
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </>
  );
}



export default App; // Ensure it's exported only once
