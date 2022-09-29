import React, { ReactElement } from "react";
import DollarIcon from "../../assets/icons/DollarIcon.png";
import "../Card.style.css";

export const TOTAL_AMOUNT = (props: any): ReactElement => {
  const { amount, setAmount } = props;
  const handleChange = (e: any) => {
    const ff = /^\d*\.?\d*$/.test(e.target.value.replaceAll(",", ""));
    if (!ff) return;
    const foo = !e.target.value
      ? e.target.value
      : currencyFormatter.format(
          Number.parseFloat(e.target.value.replace(/[^0-9.]/g, ""))
        );

    setAmount(foo);
  };

  const currencyFormatter = new Intl.NumberFormat("en-US");

  const getAmount = () => {
    if (!amount) return amount;
    const foo = currencyFormatter.format(
      Number.parseFloat(amount.replace(/[^0-9.]/g, ""))
    );
    // setAmountToShow(foo);
    return foo;
  };
  return (
    <div
      style={{
        marginRight: 10
      }}
    >
      <label className="headerText" htmlFor="amount">
        Total Amount{" "}
      </label>
      <br />
      <div
        className="rowAlignItems"
        style={{
          border: "1px solid #E9EEF2",
          borderRadius: 4
        }}
      >
        <span
          style={{
            paddingTop: 4
          }}
        >
          <img
            src={DollarIcon}
            alt="Dollar Icon"
            style={{
              width: "8px",
              height: 16
            }}
          />
        </span>
        <input
          type="text"
          pattern="([0-9]+.{0,1}[0-9]*,{0,1})*[0-9]"
          id="amount"
          value={getAmount()}
          onChange={e => handleChange(e)}
          className="amountInput headerCommon"
        />
      </div>
    </div>
  );
};
