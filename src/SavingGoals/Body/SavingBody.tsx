import React, { ReactElement } from "react";
import { SAVING_CARD } from "../Card/SavingCard";
import "../Card.style.css";

export const SAVING_BODY = (): ReactElement => {
  return (
    <div
      className="rowAlignItems bodyHeader"
      style={{
        flexDirection: "column",
        justifyContent: "space-evenly"
      }}
    >
      <div
        className="simpleText"
        style={{
          lineHeight: "120%",
          color: "#1B31A8"
        }}
      >
        Let&apos;s plan your <b>saving goal</b>.
      </div>
      <SAVING_CARD />
    </div>
  );
};
