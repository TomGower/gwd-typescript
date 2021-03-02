import React, { FunctionComponent } from 'react';

interface IProps {
  titleColor: string,
  artistColor: string,
  titleAnswer: string,
  artistAnswer: string,
  titleChecked: string | boolean,
  artistChecked: string | boolean,
  num: number,
  round: number
}

const MusicQuestion : FunctionComponent<IProps> = ({
  titleColor, artistColor, titleAnswer, artistAnswer, titleChecked, artistChecked, num, round,
}) => (
  <div>
    <strong>
      {`Question ${num}`}
    </strong>
    <br />
    <span style={{ color: titleColor }}>Title</span>
    {': '}
    <input className="answer" id={`round${round}answer q${num}a`} defaultValue={titleAnswer} />
    <label htmlFor={`question${num}`}>
      <input type="checkbox" id={`round${round} question${num}`} defaultChecked={!!titleChecked} />
      Check if correct
    </label>
    <br />
    <span style={{ color: artistColor }}>Artist</span>
    {': '}
    <input className="answer" id={`round${round}answer q${num}b`} defaultValue={artistAnswer} />
    <label htmlFor={`question${num}`}>
      <input type="checkbox" id={`round${round} question${num}`} defaultChecked={!!artistChecked} />
      Check if correct
    </label>
    <br />
  </div>
);

export default MusicQuestion;
