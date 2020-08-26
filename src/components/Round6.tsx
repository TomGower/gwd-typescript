import React, { FunctionComponent } from 'react';
import Question from './Question';
import TwoPartQuestion from './TwoPartQuestion';

interface IProps {
  updater: (event: React.MouseEvent<HTMLButtonElement>) => void,
  info: {
    round: number,
    special: boolean,
    scores: string[],
    answers: string[],
    score: number
  }
}

const RoundSix: FunctionComponent<IProps> = ({
  updater, info,
}) => {
  const colors = [];
  for (const score of info.scores) {
    if (parseInt(score, 10) === 1) {
      colors.push('green');
    } else if (parseInt(score, 10) === 0) {
      colors.push('red');
    } else {
      colors.push('black');
    }
  }

  if (info.special) {
    return (
      <div>
        <h4>
          {'Round '}
          {info.round}
        </h4>
        <TwoPartQuestion
          round={info.round}
          qnumber={1}
          color1={colors[0]}
          answer1={info.answers[0]}
          checked1={colors[0] === 'green' ? 'checked': ''}
          color2={colors[1]}
          answer2={info.answers[1]}
          checked2={colors[1] === 'green' ? 'checked': ''}
        />
        <TwoPartQuestion
          round={info.round}
          qnumber={2}
          color1={colors[2]}
          answer1={info.answers[2]}
          checked1={colors[2] === 'green' ? 'checked': ''}
          color2={colors[3]}
          answer2={info.answers[3]}
          checked2={colors[3] === 'green' ? 'checked': ''}
        />
        <TwoPartQuestion
          round={info.round}
          qnumber={3}
          color1={colors[4]}
          answer1={info.answers[4]}
          checked1={colors[4] === 'green' ? 'checked': ''}
          color2={colors[5]}
          answer2={info.answers[5]}
          checked2={colors[5] === 'green' ? 'checked': ''}
        />
        <TwoPartQuestion
          round={info.round}
          qnumber={4}
          color1={colors[6]}
          answer1={info.answers[6]}
          checked1={colors[6] === 'green' ? 'checked': ''}
          color2={colors[7]}
          answer2={info.answers[7]}
          checked2={colors[7] === 'green' ? 'checked': ''}
        />
        <TwoPartQuestion
          round={info.round}
          qnumber={5}
          color1={colors[8]}
          answer1={info.answers[8]}
          checked1={colors[8] === 'green' ? 'checked': ''}
          color2={colors[9]}
          answer2={info.answers[9]}
          checked2={colors[9] === 'green' ? 'checked': ''}
        />
        <TwoPartQuestion
          round={info.round}
          qnumber={6}
          color1={colors[10]}
          answer1={info.answers[10]}
          checked1={colors[10] === 'green' ? 'checked': ''}
          color2={colors[11]}
          answer2={info.answers[11]}
          checked2={colors[11] === 'green' ? 'checked': ''}
        />
        <TwoPartQuestion
          round={info.round}
          qnumber={7}
          color1={colors[12]}
          answer1={info.answers[12]}
          checked1={colors[12] === 'green' ? 'checked': ''}
          color2={colors[13]}
          answer2={info.answers[13]}
          checked2={colors[13] === 'green' ? 'checked': ''}
        />
        <TwoPartQuestion
          round={info.round}
          qnumber={8}
          color1={colors[14]}
          answer1={info.answers[14]}
          checked1={colors[14] === 'green' ? 'checked': ''}
          color2={colors[15]}
          answer2={info.answers[15]}
          checked2={colors[15] === 'green' ? 'checked': ''}
        />
        <br />
        <button value={info.round} onClick={updater} type="button">
          {'CLICK TO UPDATE YOUR ROUND '}
          {info.round}
          {' ANSWERS AND SCORE'}
        </button>
      </div>
    );
  }

  return (
    <div>
      <h4>
        {'Round '}
        {info.round}
      </h4>
      {colors.map((color, index) => (
        <Question
          key={`r${info.round}q${index + 1}`}
          round={info.round}
          thisColor={color}
          qnumber={index + 1}
          answer={info.answers[index]}
          checked={color === 'green' ? 'checked': ''}
        />
      ))}
      <br />
      <button value={info.round} onClick={updater} type="button">
        {'CLICK TO UPDATE YOUR ROUND '}
        {info.round}
        {' ANSWERS AND SCORE'}
      </button>
    </div>
  );
};

export default RoundSix;
