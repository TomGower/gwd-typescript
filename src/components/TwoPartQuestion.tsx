import React from 'react';

interface IProps {
  round: number,
  num: number,
  color1: string,
  answer1: string,
  checked1: string | boolean,
  color2: string,
  answer2: string,
  checked2: string | boolean
}

const TwoPartQuestion = ({
  round, num, color1, answer1, checked1, color2, answer2, checked2,
}: IProps) => (
  <div>
    <strong>
      {`Question ${num}`}
    </strong>
    <br />
    <span style={{ color: color1 }}>{'Answer A: '}</span>
    <input className="answer" id={`round${round}answer q${num}a`} defaultValue={answer1} />
    <label htmlFor={`question${num}a`}>
      <input type="checkbox" id={`round${round} question${num}a`} defaultChecked={!!checked1} />
      Check if correct
    </label>
    <br />
    <span style={{ color: color2 }}>{'Answer B: '}</span>
    <input className="answer" id={`round${round}answer q${num}b`} defaultValue={answer2} />
    <label htmlFor={`question${num}b`}>
      <input type="checkbox" id={`round${round} question${num}b`} defaultChecked={!!checked2} />
      Check if correct
    </label>
    <br />
  </div>
);

export default TwoPartQuestion;
