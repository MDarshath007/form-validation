import "./index.css";
import SignupSection from "./components/SignupSection"
import DesktopDesign from "./components/DesktopDesign";

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
