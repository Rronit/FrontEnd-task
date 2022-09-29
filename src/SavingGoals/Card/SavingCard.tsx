import React, { ReactElement, useEffect, useState } from "react";
import HomeIcon from "../../assets/icons/HomeIcon.svg";
import { CALCULATE_SAVING } from "./CalculateSaving";
import { CONFIRM_BUTTON } from "./ConfirmButton";

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
      style={{
        height: "60%",
        width: mobileView ? "100%" : "40%",
        // border: '2px solid ',
        background: " #FFFFFF",
        boxShadow: "0px 16px 32px rgba(30, 42, 50, 0.08)",
        borderRadius: 8,
        padding: "2%"
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
            style={{
              fontFamily: "Rubik",
              fontWeight: 500,
              fontSize: 24,
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
              fontFamily: "Work Sans",
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
