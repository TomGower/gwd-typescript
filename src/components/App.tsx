import React, { Component } from 'react';
import Joker from './Joker';
import SpecialRound from './SpecialRound';
import NormalRound from './NormalRound';
import MusicRound from './MusicRound';
import RoundSix from './Round6';
import RandomRound from './RandomRound';
import BonusQuestions from './BonusQuestions';

interface IState {
  currentPage: number,
  score: number,
  joker: string,
  jokerScore: number,
  r1info: {
    round: number,
    special: boolean,
    scores: any[],
    answers: string[],
    score: number
  },
  r2info: {
    round: number,
    scores: any[],
    answers: string[],
    score: number
  },
  r3info: {
    round: number,
    special: boolean,
    scores: any[],
    answers: string[],
    score: number
  },
  r4info: {
    round: number,
    special: boolean,
    scores: any[],
    answers: string[],
    score: number
  },
  r5info: {
    round: number,
    special: boolean,
    scores: any[],
    answers: string[],
    score: number
  },
  r6info: {
    round: number,
    scores: any[],
    answers: string[],
    score: number
  },
  r7info: {
    round: number,
    scores: any[],
    answers: string[],
    score: number
  },
  [index: string]: any
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentPage: 1,
      score: 0,
      joker: '',
      jokerScore: 0,
      r1info: {
        round: 1,
        special: false,
        scores: Array(8).fill(null),
        answers: Array(8).fill(''),
        score: 0,
      },
      r2info: {
        round: 2,
        scores: Array(16).fill(null),
        answers: Array(16).fill(''),
        score: 0,
      },
      r3info: {
        round: 3,
        special: false,
        scores: Array(8).fill(null),
        answers: Array(8).fill(''),
        score: 0,
      },
      r4info: {
        round: 4,
        special: false,
        scores: Array(8).fill(null),
        answers: Array(8).fill(''),
        score: 0,
      },
      r5info: {
        round: 5,
        special: false,
        scores: Array(8).fill(null),
        answers: Array(8).fill(''),
        score: 0,
      },
      r6info: {
        round: 6,
        scores: Array(16).fill(null),
        answers: Array(16).fill(''),
        score: 0,
      },
      r7info: {
        round: 7,
        scores: Array(16).fill(null),
        answers: Array(16).fill(''),
        score: 0,
      },
    };
  }

  checkSpecialRound : () => void = () => {
    const specialRound = document.querySelectorAll<HTMLInputElement>('input[name=\'bonus\']');
    for (let i = 0; i < specialRound.length; i += 1) {
      let special = 0;
      if (i === 0) special = 1;
      else special = i + 2;
      const roundName = `r${special}info`;
      const currentInfo = this.state[roundName];
      if (specialRound[i]?.checked && !currentInfo.special) {
        currentInfo.special = true;
        currentInfo.scores = Array(16).fill(null);
        currentInfo.answers = Array(16).fill('');
        this.setState({
          [roundName]: currentInfo,
        });
      }
    }
  }

  handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    let value = 0;
    const target = event.target as HTMLLIElement;
    if (target.id) {
      value = Number(target.id)
    }
    this.setState({
      currentPage: value,
    });
  }

  pickJoker = () => {
    const radio = document.querySelectorAll<HTMLInputElement>('input[name=\'joker\']');
    for (let i = 0; i < radio.length; i += 1) {
      if (radio[i].checked) {
        const roundName = `r${i + 1}info`;
        const jokerScore = this.state[roundName].score;
        this.setState({
          joker: radio[i].value,
          jokerScore,
          score: this.state.r1info.score + this.state.r2info.score + this.state.r3info.score
          + this.state.r4info.score + this.state.r5info.score + this.state.r6info.score
          + this.state.r7info.score + jokerScore,
        });
        break;
      }
    }
  }

  updateScore = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const round = target.value;
    const answerBoxes = document.querySelectorAll<HTMLInputElement>(`input[id~='round${round}answer']`);
    const answers : string[] = [];
    answerBoxes.forEach((answer) => answers.push(answer.value.toString()));
    const checkboxes = document.querySelectorAll<HTMLInputElement>(`input[id~='round${round}']`);
    const check : number[] = [];
    checkboxes.forEach((checkbox) => (checkbox.checked ? check.push(1) : check.push(0)));
    const thisScore = check.reduce((acc, cur) => (acc + cur));
    const roundName = `r${round}info`;
    const currentInfo = this.state[roundName];
    const newTotal = this.state.score - currentInfo.score + thisScore;
    currentInfo.score = thisScore;
    currentInfo.answers = answers;
    currentInfo.scores = check;
    if (`r${round}` === this.state.joker) {
      this.setState({
        jokerScore: thisScore,
        [roundName]: currentInfo,
      }, () => {
        this.setState({
          score: this.state.r1info.score + this.state.r2info.score + this.state.r3info.score
          + this.state.r4info.score + this.state.r5info.score + this.state.r6info.score
          + this.state.r7info.score + this.state.jokerScore,
        });
      });
    } else {
      this.setState({
        [roundName]: currentInfo,
        score: newTotal,
      });
    }
  }

  render() {
    const pageNumbers = [1, 2, 3, 4, 5, 6, 7];

    const renderPageNumbers = pageNumbers.map((num) => (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        key={num}
        id={num.toString()}
        onClick={this.handleClick}
      >
        {num}
      </li>
    ));

    const {
      currentPage, r1info, r2info, r3info, r4info, r5info, r6info, r7info, score,
    } = this.state;
    let currentRound;
    if (currentPage === 1) {
      currentRound = (
        <NormalRound
          updater={this.updateScore}
          info={r1info}
          key="r1"
        />
      );
    } else if (currentPage === 2) {
      currentRound = (
        <MusicRound
          updater={this.updateScore}
          info={r2info}
        />
      );
    } else if (currentPage === 3) {
      currentRound = (
        <NormalRound
          updater={this.updateScore}
          info={r3info}
          key="r3"
        />
      );
    } else if (currentPage === 4) {
      currentRound = (
        <NormalRound
          updater={this.updateScore}
          info={r4info}
          key="r4"
        />
      );
    } else if (currentPage === 5) {
      currentRound = (
        <NormalRound
          updater={this.updateScore}
          info={r5info}
          key="r5"
        />
      );
    } else if (currentPage === 6) {
      currentRound = (
        <RoundSix
          updater={this.updateScore}
          info={r6info}
        />
      );
    } else if (currentPage === 7) {
      currentRound = (
        <RandomRound
          updater={this.updateScore}
          info={r7info}
        />
      );
    }

    return (
      <div>
        <h2 style={{ align: "center" }}>GEEKS WHO DRINK Scoresheet</h2>
        <hr />
        <h4>
          {`Your Current Score is ${score}`}
        </h4>
        <hr />
        <Joker pickJoker={this.pickJoker} />
        <hr />
        <SpecialRound checkSpecialRound={this.checkSpecialRound} />
        <hr />
        {currentRound}
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
        <hr />
        <BonusQuestions />
      </div>
    );
  }
}

export default App;
