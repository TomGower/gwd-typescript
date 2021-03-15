import React from 'react';

interface IProps {
  round: number
}

const JokerInput = ({ round }: IProps) => (
  <>
    <label htmlFor={`Jround${round}`}>
      <input type="radio" id={`Jround${round}`} name="joker" value={`r${round}`} data-input={round} />
      {`Round ${round}`}
    </label>
  </>
);

export default JokerInput;
