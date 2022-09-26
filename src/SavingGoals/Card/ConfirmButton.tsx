import React, { ReactElement } from 'react';

export const CONFIRM_BUTTON = (): ReactElement => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <button
        style={{
          width: '60%',
          backgroundColor: '#1B31A8',
          borderRadius: 32,
          height: 56,
          color: '#fff',
          fontSize: 16,
          fontWeight: 600,
          padding: 10,
          marginTop: 32,
        }}
      >
        Confirm
      </button>
    </div>
  );
};
