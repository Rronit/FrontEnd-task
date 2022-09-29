import React, { useEffect, useState } from "react";
import "../Card.style.css";

interface MonthlyAmountInterface {
  months: number;
  amount: number;
  finalDate: any;
}

export const MONTHLY_AMOUNT = ({
  months,
  amount,
  finalDate
}: MonthlyAmountInterface) => {
  const [monthlyAmount, setMonthlyAmount] = useState<number>(0);
  useEffect(() => {
    if (months < 1) return;
    const amountNumber = amount.toString().replaceAll(",", "");

    const tempAmount = Math.round((Number(amountNumber) / months) * 100) / 100;
    setMonthlyAmount(tempAmount);
  }, [months, amount]);

  return (
    <div
      style={{
        height: "30%",
        border: "1px solid lightgrey",
        borderRadius: 8,
        marginTop: 15
      }}
    >
      <div
        style={{
          height: "50%"
        }}
      >
        <span
          className="simpleText"
          style={{
            color: "#1E2A32"
          }}
        >
          Monthly Amount
        </span>
        <span
          style={{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: 500,
            color: "#0079FF",
            fontSize: 32,
            lineHeight: "120%"
          }}
        >
          ${monthlyAmount}
        </span>
      </div>
      <div className="resultText">
        <span>
          You&apos;re planning <b>{months} monthly deposit</b> to reach your{" "}
          <b> ${amount}</b> goal by {finalDate}
        </span>
      </div>
    </div>
  );
};
