import React, { ReactElement } from "react";
import "../Card.style.css";

export const CONFIRM_BUTTON = (): ReactElement => {
  return (
    <div className="rowAlignItems">
      <button className="confirmBtn">Confirm</button>
    </div>
  );
};
