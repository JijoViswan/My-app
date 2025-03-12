// import logo from "./logo.svg";
import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import React, { useEffect, useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    document.body.style.backgroundColor = "#042743";
  }, []);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Dark mode enabled";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Light mode enabled";
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <div
      className="App"
      style={{ color: mode === "dark" ? "white" : "#042743" }}
    >
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert} />
      {/* <About></About> */}
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          Heading="Enter the text to analyze"
          mode={mode}
        ></TextForm>
      </div>
      {/* <Navbar title="1"></Navbar> */}
    </div>
  );
}

export default App;
