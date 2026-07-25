import "./index.css";
import SignupSection from "./components/SignupSection"
import DesktopDesign from "./components/DesktopDesign"
import { Routes, Route } from "react-router-dom";import AccountCreated from "./components/AccountCreated";
;

function App() {
  return (
    <>
    <div className="container-sm d-flex">
      <DesktopDesign />
      <Routes>
        <Route path="/" element={<SignupSection/>}/>
        <Route path="/account-created" element={<AccountCreated/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
