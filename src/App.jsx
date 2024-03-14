import { useState, createContext } from "react";
import Navbar from "./Components/Navbar";
import TextBar from "./Components/TextBar";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const ModeContext = createContext();
export const alertContext = createContext();

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  function createAlert(message, status) {
    setAlert({
      msg: message,
      msgStatus: status,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      createAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      createAlert("Light mode enabled", "success");
    }
  };
  document.body.style.backgroundColor = mode === "light" ? "white" : "#262529";
  return (
    <>
      <Router>   
        <alertContext.Provider value={createAlert}>
          <ModeContext.Provider value={mode}>
            <Navbar setTheme={handleMode} />
            <Alert alert={alert} />
            <Routes>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/" element={<TextBar />}></Route>
            </Routes>
          </ModeContext.Provider>
        </alertContext.Provider>
      </Router>
    </>
  );
}
