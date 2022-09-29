import React, { ReactElement, useEffect, useState } from "react";
import HomeIcon from "../../assets/icons/HomeIcon.svg";
import { CALCULATE_SAVING } from "./CalculateSaving";
import { CONFIRM_BUTTON } from "./ConfirmButton";
import "../Card.style.css";

export const SAVING_CARD = (): ReactElement => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileView, setMobileView] = useState<boolean>(false);
  const breakpoint = 620;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  useEffect(() => {
    setMobileView(width < breakpoint);
  }, [width, breakpoint]);
  // const isMobileView = width < breakpoint;
  return (
    <div
      className="card"
      style={{
        width: mobileView ? "100%" : "40%"
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "left" }}
      >
        <div>
          <img
            src={HomeIcon}
            alt="Home Icon"
            style={{
              width: "100px",
              height: "64px"
            }}
          />
        </div>

        <div>
          <span
            className="headerCommon"
            style={{
              lineHeight: "120%",
              color: "#1E2A32",
              fontStyle: "normal"
            }}
          >
            Buy a house
          </span>
          <br />
          <span
            style={{
              // fontWeight: 500,
              fontSize: 16,
              lineHeight: "150%",
              color: "#708797",
              fontStyle: "normal"
            }}
          >
            Saving goal
          </span>
        </div>
      </div>
      <CALCULATE_SAVING mobileView={mobileView} />
      <CONFIRM_BUTTON />
    </div>
  );
};
