import React, { ReactElement, useState } from 'react';
import DollarIcon from '../../assets/icons/DollarIcon.png';

export const TOTAL_AMOUNT = (props: any): ReactElement => {
  const { amount, setAmount } = props;
  const handleChange = (e: any) => {
    console.log(e.target.value);
    setAmount(e.target.value);
  };
  const handleBlur = () => {
    console.log(amount);
  };
  return (
    <div
      style={{
        marginRight: 10,
      }}
    >
      <label
        style={{ fontSize: 14, lineHeight: '150%', height: 21 }}
        htmlFor="amount"
      >
        Total Amount{' '}
      </label>
      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          border: '1px solid #E9EEF2',
          borderRadius: 4,
        }}
      >
        <span>
          <img
            src={DollarIcon}
            alt="Dollar Icon"
            style={{
              width: '8px',
              height: '14px',
            }}
          />
        </span>
        <input
          id="amount"
          type={'number'}
          value={amount}
          onChange={(e) => handleChange(e)}
          onBlur={() => handleBlur()}
          style={{
            width: '100%',
            height: 56,
            border: '1px solid #fff',
            fontFamily: 'Rubik',
            fontWeight: 500,
            fontSize: 24,
          }}
        ></input>
      </div>
    </div>
  );
};
