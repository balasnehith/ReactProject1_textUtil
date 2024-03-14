import React, { useContext } from "react";
import { ModeContext } from "../App";

export default function About() {
  const mode = useContext(ModeContext);
  return (
    <>
      <div className="container accordion my-3 color-bg-" id="accordionExample">
        <div className={`accordion-item text-bg-${mode}`}>
          <h2 className="accordion-header">
            <button className={`accordion-button text-bg-${mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Person Info
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Aurthor: Bala Snehith Reddy Tirumalareddy</strong><br />
               I will be completing my masters in computational science in Laurentian University next year. 
             
            </div>
          </div>
        </div>
        <div className={`accordion-item text-bg-${mode}`}>
          <h2 className="accordion-header">
            <button className={`accordion-button text-bg-${mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              About text-Transform
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            I have created this application using React and this is my First project. This Project is names as text-Transform as you can use some functionality to transform text to upper-case, lower-case, clear the text, copy and so on.
            </div>
          </div>
        </div>
        <div className={`accordion-item text-bg-${mode}`}>
          <h2 className="accordion-header">
            <button className={`accordion-button text-bg-${mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Hooks and modules used
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
             <code>React, react-dom, react-router-dom</code> are the modules used <br />
             <code>useState, useEffect, useRef, useContext</code> are the Hooks used
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
