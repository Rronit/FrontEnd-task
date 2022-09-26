import React, { ReactElement } from 'react';
import HomeIcon from '../../assets/icons/HomeIcon.svg';
import { CALCULATE_SAVING } from './CalculateSaving';
import { CONFIRM_BUTTON } from './ConfirmButton';

export const SAVING_CARD = (): ReactElement => {
  return (
    <div
      style={{
        height: '60%',
        width: '40%',
        // border: '2px solid ',
        background: ' #FFFFFF',
        boxShadow: '0px 16px 32px rgba(30, 42, 50, 0.08)',
        borderRadius: 8,
        padding: '2%',
      }}
    >
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'left' }}
      >
        <div>
          <img
            src={HomeIcon}
            alt="Home Icon"
            style={{
              width: '100px',
              height: '64px',
            }}
          />
        </div>

        <div>
          <span
            style={{
              fontFamily: 'Rubik',
              fontWeight: 500,
              fontSize: 24,
              lineHeight: '120%',
              color: '#1E2A32',
              fontStyle: 'normal',
            }}
          >
            Buy a house
          </span>
          <br />
          <span
            style={{
              fontFamily: 'Work Sans',
              // fontWeight: 500,
              fontSize: 16,
              lineHeight: '150%',
              color: '#708797',
              fontStyle: 'normal',
            }}
          >
            Saving goal
          </span>
        </div>
      </div>
      <CALCULATE_SAVING />
      <CONFIRM_BUTTON />
    </div>
  );
};
