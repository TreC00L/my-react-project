import Card from "./Card";
import MyFooter from "./Footer";
import ButtonMeh from "./button-click";
import background from "./assets/mainbackground.jpg";

const styles: React.CSSProperties = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",         // Ensures the image covers the whole screen
  backgroundPosition: "center",     // Centers the image
  backgroundRepeat: "no-repeat",    // Prevents repetition
  height: "100vh",                  // Set to full viewport height
  width: "100%",                     // Ensures it takes full width
  position: "fixed",                 // Fixes it in place so it doesn’t scroll
  top: 0,                            // Positions it at the top
  left: 0,                           // Positions it at the left
  zIndex: -1,                        // Sends it behind all content
};


function App() {
  return <div style={styles}>
    <Card/>
    <ButtonMeh/>
    <MyFooter/>
    </div>;
}

export default App;