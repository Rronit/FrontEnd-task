import React from 'react';
import { HEADER } from './Header/Header';
import { SAVING_BODY } from './SavingGoals/Body/SavingBody';
import '@fontsource/work-sans';

export function App(): JSX.Element {
  return (
    <div
      data-testid="greetings-container"
      style={{
        fontFamily: 'Work Sans',
      }}
    >
      <HEADER />
      <SAVING_BODY />
    </div>
  );
}
