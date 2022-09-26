import React, { ReactElement } from 'react';
import { SAVING_CARD } from '../Card/SavingCard';

export const SAVING_BODY = (): ReactElement => {
  return (
    <div
      style={{
        backgroundColor: '#E5E5E5',
        width: '100%',
        height: '90%',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'Work Sans',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: 20,
          lineHeight: '120%',
          color: '#1B31A8',
        }}
      >
        Let&apos;s plan your <b>saving goal</b>.
      </div>
      <SAVING_CARD />
    </div>
  );
};
// font-family: Work Sans;
// font-size: 20px;
// font-weight: 400;
// line-height: 24px;
// letter-spacing: 0px;
// text-align: center;

// //styleName: LG / subtitle--semibold;
// font-family: Work Sans;
// font-size: 20px;
// font-weight: 600;
// line-height: 24px;
// letter-spacing: 0px;
// text-align: center;

// //styleName: LG / subtitle;
// font-family: Work Sans;
// font-size: 20px;
// font-weight: 400;
// line-height: 24px;
// letter-spacing: 0px;
// text-align: center;
