import React from 'react';
import TwoPartQuestion from './TwoPartQuestion';

interface IProps {
  updater: (event: React.MouseEvent<HTMLButtonElement>) => void,
  info: {
    round: number,
    scores: string[],
    answers: string[],
    score: number
  }
}

const RoundSix = ({
  updater, info,
}: IProps) => {
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

  return (
    <div>
      <h4>
        {`Round ${info.round}`}
      </h4>
      <TwoPartQuestion
        round={info.round}
        num={1}
        color1={colors[0]}
        answer1={info.answers[0]}
        checked1={colors[0] === 'green' ? 'checked' : false}
        color2={colors[1]}
        answer2={info.answers[1]}
        checked2={colors[1] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={info.round}
        num={2}
        color1={colors[2]}
        answer1={info.answers[2]}
        checked1={colors[2] === 'green' ? 'checked' : false}
        color2={colors[3]}
        answer2={info.answers[3]}
        checked2={colors[3] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={info.round}
        num={3}
        color1={colors[4]}
        answer1={info.answers[4]}
        checked1={colors[4] === 'green' ? 'checked' : false}
        color2={colors[5]}
        answer2={info.answers[5]}
        checked2={colors[5] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={info.round}
        num={4}
        color1={colors[6]}
        answer1={info.answers[6]}
        checked1={colors[6] === 'green' ? 'checked' : false}
        color2={colors[7]}
        answer2={info.answers[7]}
        checked2={colors[7] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={info.round}
        num={5}
        color1={colors[8]}
        answer1={info.answers[8]}
        checked1={colors[8] === 'green' ? 'checked' : false}
        color2={colors[9]}
        answer2={info.answers[9]}
        checked2={colors[9] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={info.round}
        num={6}
        color1={colors[10]}
        answer1={info.answers[10]}
        checked1={colors[10] === 'green' ? 'checked' : false}
        color2={colors[11]}
        answer2={info.answers[11]}
        checked2={colors[11] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={info.round}
        num={7}
        color1={colors[12]}
        answer1={info.answers[12]}
        checked1={colors[12] === 'green' ? 'checked' : false}
        color2={colors[13]}
        answer2={info.answers[13]}
        checked2={colors[13] === 'green' ? 'checked' : false}
      />
      <TwoPartQuestion
        round={info.round}
        num={8}
        color1={colors[14]}
        answer1={info.answers[14]}
        checked1={colors[14] === 'green' ? 'checked' : false}
        color2={colors[15]}
        answer2={info.answers[15]}
        checked2={colors[15] === 'green' ? 'checked' : false}
      />
      <br />
      <button value={info.round} onClick={updater} type="button">
        {`CLICK TO UPDATE YOUR ROUND ${info.round} ANSWERS AND SCORE`}
      </button>
    </div>
  );
};

export default RoundSix;
