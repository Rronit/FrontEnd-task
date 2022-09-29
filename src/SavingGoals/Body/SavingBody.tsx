import React, { ReactElement } from "react";
import { SAVING_CARD } from "../Card/SavingCard";
import "../Card.style.css";

export const SAVING_BODY = (): ReactElement => {
  return (
    <div
      style={{
        backgroundColor: "#E5E5E5",
        width: "100%",
        height: "90%",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center"
      }}
    >
      <div
        className="simpleText"
        style={{
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: 20,
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
