import React, { FunctionComponent } from 'react';

interface IProps {
  round: number,
  qnumber: number,
  color1: string,
  answer1: string,
  checked1: string,
  color2: string,
  answer2: string,
  checked2: string
}

const TwoPartQuestion: FunctionComponent<IProps> = ({
  round, qnumber, color1, answer1, checked1, color2, answer2, checked2,
}) => (
  <div>
    <strong>
      {'Question '}
      {qnumber}
    </strong>
    <br />
    <span style={{ color: color1 }}>Answer A</span>
    {': '}
    <input className="answer" id={`round${round}answer q${qnumber}a`} defaultValue={answer1} />
    <input type="checkbox" id={`round${round} question${qnumber}`} defaultChecked={!!checked1} />
    <label htmlFor={`question${qnumber}`}>Check if correct</label>
    <br />
    <span style={{ color: color2 }}>Answer B</span>
    {': '}
    <input className="answer" id={`round${round}answer q${qnumber}b`} defaultValue={answer2} />
    <input type="checkbox" id={`round${round} question${qnumber}`} defaultChecked={!!checked2} />
    <label htmlFor={`question${qnumber}`}>Check if correct</label>
    <br />
  </div>
);

export default TwoPartQuestion;
