import "./index.css";
import DesktopDesign from "./components/DesktopDesign";
import SignupSection from "./components/signup-section";

function App() {
  return (
    <>
    
    <div className="container-sm d-flex">
      <DesktopDesign />
      <SignupSection/>
    </div>
    </>
  );
}

export default App;
