import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import GenerateForm from "./components/GenerateForm/GenerateForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/generate-form" element={<GenerateForm />} />
    </Routes>
  );
}

export default App;
