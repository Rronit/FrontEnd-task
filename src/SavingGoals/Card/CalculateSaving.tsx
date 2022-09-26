import React, { ReactElement, useEffect, useState } from 'react';
import { DATE_PICKER } from './Datepicker';
import { MONTHLY_AMOUNT } from './MonthlyAmount';
import { TOTAL_AMOUNT } from './TotalAmount';

export const CALCULATE_SAVING = (): ReactElement => {
  const [amount, setAmount] = useState<number>(0);
  const [goalDate, setGoalDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState('');
  const [monthsLeft, setMonthsLeft] = useState<number>(0);

  const updateDate = (date: any) => {
    setGoalDate(date);
  };

  const updateRenderDate = (randerDate: any) => {
    setFinalDate(randerDate);
    console.log(randerDate);
  };

  useEffect(() => {
    if (!(amount && goalDate)) return;
    console.log(amount, goalDate);
    const months =
      goalDate.getMonth() -
      new Date().getMonth() +
      12 * (goalDate.getFullYear() - new Date().getFullYear());
    setMonthsLeft(months);
    console.log(monthsLeft);
  }, [amount, goalDate]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <TOTAL_AMOUNT amount={amount} setAmount={setAmount} />
        <DATE_PICKER
          updateDate={updateDate}
          updateRenderDate={updateRenderDate}
        />
      </div>
      <MONTHLY_AMOUNT
        months={monthsLeft || 0}
        amount={amount}
        finalDate={finalDate}
      />
    </>
  );
};
