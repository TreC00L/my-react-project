import Card from "./Card";
import MyFooter from "./Footer";
import ButtonMeh from "./button-click";
import background from "./assets/mainbackground.jpg";

const styles: React.CSSProperties = {
  backgroundImage: `url(${background})`,  // Use the imported image
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
  return <div style={styles}>
    <Card/>
    <ButtonMeh/>
    <MyFooter/>
    </div>;
}

export default App;