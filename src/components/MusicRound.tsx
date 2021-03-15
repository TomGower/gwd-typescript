import React from 'react';
import MusicQuestion from './MusicQuestion';

interface IProps {
  updater: (event: React.MouseEvent<HTMLButtonElement>) => void,
  info: {
    round: number,
    scores: string[],
    answers: string[],
    score: number
  }
}

const MusicRound = ({
  info, updater,
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
      <MusicQuestion
        round={2}
        num={1}
        titleColor={colors[0]}
        artistColor={colors[1]}
        titleAnswer={info.answers[0]}
        artistAnswer={info.answers[1]}
        titleChecked={colors[0] === 'green' ? 'checked' : false}
        artistChecked={colors[1] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        num={2}
        titleColor={colors[2]}
        artistColor={colors[3]}
        titleAnswer={info.answers[2]}
        artistAnswer={info.answers[3]}
        titleChecked={colors[2] === 'green' ? 'checked' : false}
        artistChecked={colors[3] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        num={3}
        titleColor={colors[4]}
        artistColor={colors[5]}
        titleAnswer={info.answers[4]}
        artistAnswer={info.answers[5]}
        titleChecked={colors[4] === 'green' ? 'checked' : false}
        artistChecked={colors[5] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        num={4}
        titleColor={colors[6]}
        artistColor={colors[7]}
        titleAnswer={info.answers[6]}
        artistAnswer={info.answers[7]}
        titleChecked={colors[6] === 'green' ? 'checked' : false}
        artistChecked={colors[7] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        num={5}
        titleColor={colors[8]}
        artistColor={colors[9]}
        titleAnswer={info.answers[8]}
        artistAnswer={info.answers[9]}
        titleChecked={colors[8] === 'green' ? 'checked' : false}
        artistChecked={colors[9] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        num={6}
        titleColor={colors[10]}
        artistColor={colors[11]}
        titleAnswer={info.answers[10]}
        artistAnswer={info.answers[11]}
        titleChecked={colors[10] === 'green' ? 'checked' : false}
        artistChecked={colors[11] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        num={7}
        titleColor={colors[12]}
        artistColor={colors[13]}
        titleAnswer={info.answers[12]}
        artistAnswer={info.answers[13]}
        titleChecked={colors[12] === 'green' ? 'checked' : false}
        artistChecked={colors[13] === 'green' ? 'checked' : false}
      />
      <MusicQuestion
        round={2}
        num={8}
        titleColor={colors[14]}
        artistColor={colors[15]}
        titleAnswer={info.answers[14]}
        artistAnswer={info.answers[15]}
        titleChecked={colors[14] === 'green' ? 'checked' : false}
        artistChecked={colors[15] === 'green' ? 'checked' : false}
      />
      <br />
      <button value={info.round} onClick={updater} type="button">
        {`CLICK TO UPDATE YOUR ROUND ${info.round} ANSWERS AND SCORE`}
      </button>
    </div>
  );
};

export default MusicRound;
