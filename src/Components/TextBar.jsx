import React, { useState, useContext } from "react";
import { ModeContext, alertContext } from "../App";

export default function TextBar() {
  const [content, setContent] = useState("");
  const mode = useContext(ModeContext);
  const alert = useContext(alertContext);

  const handleSpaces = () => {
    let new_content = content
      .split(" ")
      .filter((ele) => ele !== "")
      .join(" ");
    setContent(new_content);
    alert('Spaces cleared', 'success')
  };
  const handleUpperCase = () => {
    setContent((c) => {
      return c.toUpperCase();
    });
    alert('Converted to upper case', 'success')
  };
  const handleLowerCase = () => {
    setContent((c) => {
      return c.toLowerCase();
    });
    alert('Converted to Lower case', 'success')
  };
  const handleClearText = () => {
    setContent("");
    alert('Text cleared', 'success')
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(content);
    alert('Text Copied', 'success')
  };
  return (
    <>
      <div className={`container p-0 text-bg-${mode === "light" ? "white" : "dark"}`}>
        <h2 className="text-center my-4">Enter the text to Anylyse below</h2>
        <textarea value={content} onChange={(e) => setContent((c) => e.target.value)} cols="30" rows="10" className={`container m-0 text-bg-${mode === "dark" ? "secondary" : "white"}`}></textarea>
      </div>
      <div className="container text-center">
        <button onClick={handleSpaces} className={`btn btn-${mode === "light" ? "primary" : "secondary"} mx-1 my-1`}>
          Clear Spaces
        </button>
        <button onClick={handleUpperCase} className={`btn btn-${mode === "light" ? "primary" : "secondary"} mx-1 my-1`}>
          To Upper Case
        </button>
        <button onClick={handleLowerCase} className={`btn btn-${mode === "light" ? "primary" : "secondary"} mx-1 my-1`}>
          To Lower Case
        </button>
        <button onClick={handleClearText} className={`btn btn-${mode === "light" ? "primary" : "secondary"} mx-1 my-1`}>
          Clear Text
        </button>
        <button onClick={handleCopyText} className={`btn btn-${mode === "light" ? "primary" : "secondary"} mx-1 my-1`}>
          Copy Text
        </button>
      </div>
      <div className={`container my-3 text-${mode === "dark" ? "white" : "black"}`}>
        <h3>Text Summary</h3>
        <p>
          {content.split(" ").filter((ele) => ele !== "").length} words and {content.length} characters
        </p>
        <h3> Text Preview</h3>
        <p>{content}</p>
      </div>
    </>
  );
}
