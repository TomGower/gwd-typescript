import React from 'react';

interface IProps {
  thisColor: string,
  round: number,
  answer: string,
  num: number,
  checked: string | boolean,
}

const Question= ({
  thisColor, round, answer, num, checked = false,
}: IProps) => (
  <div>
    <strong>{`Question ${num}`}</strong>
    <br />
    <span style={{ color: thisColor }}>{'Answer: '}</span>
    <input className="answer" id={`round${round}answer q${num}`} defaultValue={answer} />
    <label htmlFor={`question${num}`}>
      <input type="checkbox" id={`round${round} question${num}`} defaultChecked={!!checked} />
      Check if correct
    </label>
    <br />
  </div>
);

export default Question;
