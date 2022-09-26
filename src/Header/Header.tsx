import React, { ReactElement } from 'react';
import logo from '../assets/icons/logo.svg';

export const HEADER: React.FC = (): ReactElement => {
  return (
    <div
      style={{
        width: '100%',
        height: 80,
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          width: '100px',
          height: '32px',
          marginLeft: '5%',
          position: 'relative',
          top: '50%',
          transform: 'translate(0,-50%)',
        }}
      />
    </div>
  );
};
