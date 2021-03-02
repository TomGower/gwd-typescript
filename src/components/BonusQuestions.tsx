import React from 'react';
import BonusQuestion from './BonusQuestion';

const bonusRounds = [1, 3, 4, 6, 7];

const BonusRound = () => (
  <div>
    <strong>Bonus Questions</strong>
    <br />
    {bonusRounds.map((round) => <BonusQuestion roundNumber={round} key={round} />)}
  </div>
);

export default BonusRound;
