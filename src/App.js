import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import GenerateForm from "./components/GenerateForm/GenerateForm";
import CreateForm from "./components/CreateForm/CreateForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/generate-form" element={<GenerateForm />} />
      <Route path="/home/:id" element={<CreateForm />} />
    </Routes>
  );
}

export default App;
