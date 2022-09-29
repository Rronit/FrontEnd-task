import React, { ReactElement, useEffect, useState } from "react";
import "../Card.style.css";
import PrevIcon from "../../assets/icons/PrevIcon.svg";
import NextIcon from "../../assets/icons/NextIcon.svg";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const DATE_PICKER = ({
  updateDate,
  updateRenderDate,
  isMobileView
}: any): ReactElement => {
  const [startDate, setStartDate] = useState(new Date());
  const CUSTOM_INPUT = (props: any): ReactElement => {
    const { onChange, onClick, value } = props;

    useEffect(() => {
      updateRenderDate(value);
    }, [value]);

    const goNextMonth = () => {
      const newDate = new Date(startDate.setMonth(startDate.getMonth() + 1));

      setStartDate(newDate);
      updateDate(newDate, value);
    };
    const goPrevMonth = () => {
      if (startDate.getMonth() === new Date().getMonth()) return;
      const newDate = new Date(startDate.setMonth(startDate.getMonth() - 1));

      setStartDate(newDate);
      updateDate(newDate, value);
    };
    return (
      <div
        style={{
          maxWidth: isMobileView ? 200 : undefined,
          marginRight: isMobileView ? 10 : undefined
        }}
      >
        <label className="headerText" htmlFor="amount">
          Reach goal by{" "}
        </label>
        <br />
        <div
          className="rowAlignItems"
          style={{
            border: "1px solid #E9EEF2",
            borderRadius: 4
          }}
        >
          <span onClick={() => goPrevMonth()} style={{}}>
            <img
              src={PrevIcon}
              alt="Prev Icon"
              style={{
                width: "8px",
                height: "14px"
              }}
            />
          </span>
          <input
            style={{
              // width: '55%',
              height: 56,
              border: "1px solid #fff",
              textAlign: "center"
            }}
            onChange={onChange}
            value={value}
            onClick={onClick}
          />
          <span onClick={() => goNextMonth()} style={{}}>
            <img
              src={NextIcon}
              alt="Next Icon"
              style={{
                width: "8px",
                height: "14px"
              }}
            />
          </span>
        </div>
      </div>
    );
  };
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={date => {
          date && setStartDate(date);
          updateDate(date);
        }}
        dateFormat="MMMM, yyyy"
        showMonthYearPicker
        minDate={new Date()}
        customInput={<CUSTOM_INPUT />}
      />
    </div>
  );
};
