import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import GenerateForm from "./components/GenerateForm/GenerateForm";
import CreateForm from "./components/CreateForm/CreateForm";
import FormView from "./FormView/FormView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/generate-form" element={<GenerateForm />} />
      <Route path="/home/:id" element={<CreateForm />} />
      <Route path="/form/:id" element={<FormView />} />
    </Routes>
  );
}

export default App;
