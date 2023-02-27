import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Home/Homepage";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <p>Hello</p>
    </div>
  );
}

export default Home;
