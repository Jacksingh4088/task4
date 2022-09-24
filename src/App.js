import {BrowserRouter, Routes, Route,} from "react-router-dom";
import './App.css';
import Demo1 from "./components/Demo1";
import Details from "./Details";
import Home from "./Home";
import Login from "./Login";
import Protected from "./Protected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Protected Component={Home}/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/Details" element={<Protected Component={Details}/>} />
        {/* <Route path="/demo1" element={<Demo1/>} /> */}
      </Routes>
  </BrowserRouter>
  )
}

export default App;
