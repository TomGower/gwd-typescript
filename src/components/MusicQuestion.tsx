import React, { FunctionComponent } from 'react';

interface IProps {
  titleColor: string,
  artistColor: string,
  titleAnswer: string,
  artistAnswer: string,
  titleChecked: string,
  artistChecked: string,
  qnumber: number,
  round: number
}

const MusicQuestion : FunctionComponent<IProps> = ({
  titleColor, artistColor, titleAnswer, artistAnswer, titleChecked, artistChecked, qnumber, round,
}) => (
  <div>
    <strong>
      {'Question '}
      {qnumber}
    </strong>
    <br />
    <span style={{ color: titleColor }}>Title</span>
    {': '}
    <input className="answer" id={`round${round}answer q${qnumber}a`} defaultValue={titleAnswer} />
    <input type="checkbox" id={`round${round} question${qnumber}`} defaultChecked={!!titleChecked} />
    <label htmlFor={`question${qnumber}`}>Check if correct</label>
    <br />
    <span style={{ color: artistColor }}>Artist</span>
    {': '}
    <input className="answer" id={`round${round}answer q${qnumber}b`} defaultValue={artistAnswer} />
    <input type="checkbox" id={`round${round} question${qnumber}`} defaultChecked={!!artistChecked} />
    <label htmlFor={`question${qnumber}`}>Check if correct</label>
    <br />
  </div>
);

export default MusicQuestion;
