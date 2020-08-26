import React, { FunctionComponent } from 'react';

interface IProps {
  thisColor: string,
  round: number,
  answer: string,
  qnumber: number,
  checked: string,
}

const Question : FunctionComponent<IProps> = ({
  thisColor, round, answer, qnumber, checked = '',
}) => (
  <div>
    <strong>
      Question
      {` ${qnumber}`}
    </strong>
    <br />
    <span style={{ color: thisColor }}>Answer</span>
    {': '}
    <input className="answer" id={`round${round}answer q${qnumber}`} defaultValue={answer} />
    <input type="checkbox" id={`round${round} question${qnumber}`} defaultChecked={!!checked} />
    <label htmlFor={`question${qnumber}`}>Check if correct</label>
    <br />
  </div>
);

export default Question;
