import React from 'react';

interface IProps {
  roundNumber: number
}

const BonusQuestion = ({ roundNumber }: IProps) => (
  <>
    {`Round ${roundNumber} Bonus Question`}
    <br />
    <span>Answer</span>
    {': '}
    <input className="answer" />
    <label htmlFor={`bonusquestion${roundNumber}`}>
      <input type="checkbox" id={`bonusquestion${roundNumber}`} />
      Check if correct
    </label>
    <br />
  </>
);

export default BonusQuestion;
