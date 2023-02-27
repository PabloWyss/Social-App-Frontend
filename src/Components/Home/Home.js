import { Route, Routes } from "react-router-dom";
import SignIn from "../../pages/AuthProcess/SignIn/SignIn";
import SignUp from "../../pages/AuthProcess/SignUp/SignUp";
import Verification from "../../pages/AuthProcess/Verification/Verification";
import Homepage from "../../pages/Home/Homepage";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </div>
  );
}

export default Home;
