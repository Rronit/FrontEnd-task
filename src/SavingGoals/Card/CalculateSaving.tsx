import React, { ReactElement, useEffect, useState } from 'react';
import { DATE_PICKER } from './Datepicker';
import { MONTHLY_AMOUNT } from './MonthlyAmount';
import { TOTAL_AMOUNT } from './TotalAmount';

export const CALCULATE_SAVING = (): ReactElement => {
  const [amount, setAmount] = useState<any>(0);
  const [goalDate, setGoalDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState('');
  const [monthsLeft, setMonthsLeft] = useState<number>(0);

  const updateDate = (date: any) => {
    setGoalDate(date);
  };

  const updateRenderDate = (randerDate: any) => {
    setFinalDate(randerDate);
  };

  useEffect(() => {
    if (!(amount && goalDate)) return;
    const months =
      goalDate.getMonth() -
      new Date().getMonth() +
      12 * (goalDate.getFullYear() - new Date().getFullYear());
    setMonthsLeft(months);
  }, [amount, goalDate]);
  console.log(amount, Number(amount));

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
        months={monthsLeft}
        amount={amount}
        finalDate={finalDate}
      />
    </>
  );
};
