import "./App.css";
import Form from "./components/Form";
import Nav from "./components/Nav";
import image from "./assets/hero.png";

function App() {
  return (
    <>
      <Nav />
      <div className="Form-section">
        <Form />
        <div className="glow-effect">
          <img className="hero" src={image} alt="Image" />
        </div>
      </div>
    </>
  );
}

export default App;
