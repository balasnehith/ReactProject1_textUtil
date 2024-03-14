import React, { useContext } from "react";
import { ModeContext } from "../App";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const mode = useContext(ModeContext);
  return (
    <div className={`container-fluid p-2 text-bg-${mode}`}>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className={`nav-link text-${mode === "light" ? "dark" : "light"}`}>
            Content
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className={`nav-link text-${mode === "light" ? "dark" : "light"}`}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/xyz" className={`nav-link disabled text-${mode === "light" ? "dark" : "light"}`}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <div className="form-check form-switch my-2">
            <input onChange={props.setTheme} className="form-check-input" type="checkbox" id="modeChange" />
            <label className={`text-${mode === "light" ? "dark" : "light"}`} htmlFor="modeChange">
              {mode === "light" ? "Dark mode" : "Light mode"}
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}
