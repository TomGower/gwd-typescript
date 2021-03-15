import React from 'react';
import JokerInput from './JokerInput';

const rounds = [1, 2, 3, 4, 5, 6, 7];

interface IProps {
  pickJoker: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Joker = ({ pickJoker }: IProps) => (
  <div>
    <p>Pick which round you want to joker!</p>
    <div>
      {rounds.map((round) => <JokerInput round={round} key={round} />)}
    </div>
    <div>
      <button type="submit" id="jokerButton" onClick={pickJoker}>Submit Joker Round Selection</button>
    </div>
  </div>
);

export default Joker;
