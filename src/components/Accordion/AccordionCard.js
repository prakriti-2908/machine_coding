import { useState } from "react";
import "./styles/AccordionCard.css";

export const AccordionCard = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="accordion-card">
      <div
        className="title"
        onClick={() => {
          setShow(!show);
        }}
      >
        <h3>Title-1</h3>
        <span className="material-icons">keyboard_arrow_down</span>
      </div>
      {show && (
        <div className="hidden">
          <p>paragraph for accordion</p>
        </div>
      )}
    </div>
  );
};