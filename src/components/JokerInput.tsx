import React, { FunctionComponent } from 'react';

interface IProps {
  round: number
}

const JokerInput : FunctionComponent<IProps> = ({ round }) => (
  <>
    <label htmlFor={`Jround${round}`}>
      <input type="radio" id={`Jround${round}`} name="joker" value={`r${round}`} data-input={round} />
      {`Round ${round}`}
    </label>
  </>
);

export default JokerInput;
