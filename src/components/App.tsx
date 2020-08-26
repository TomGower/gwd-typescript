import React, { Component } from 'react';
import Joker from './Joker';
import SpecialRound from './SpecialRound';
import RoundOne from './Round1';
import MusicRound from './Round2';
import RoundThree from './Round3';
import RoundFour from './Round4';
import RoundFive from './Round5';
import RoundSix from './Round6';
import RoundSeven from './Round7';
import RandomRound from './Round8';
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
    special: boolean,
    scores: any[],
    answers: string[],
    score: number
  },
  r7info: {
    round: number,
    special: boolean,
    scores: any[],
    answers: string[],
    score: number
  },
  r8info: {
    round: number,
    scores: any[],
    answers: string[],
    score: number
  },
  [index: string]: any
}

class App extends Component<{}, IState> {
  constructor(props : any) {
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
        special: false,
        scores: Array(8).fill(null),
        answers: Array(8).fill(''),
        score: 0,
      },
      r7info: {
        round: 7,
        special: false,
        scores: Array(8).fill(null),
        answers: Array(8).fill(''),
        score: 0,
      },
      r8info: {
        round: 8,
        scores: Array(16).fill(null),
        answers: Array(16).fill(''),
        score: 0,
      },
    };
    this.updateScore = this.updateScore.bind(this);
    this.pickJoker = this.pickJoker.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkSpecialRound = this.checkSpecialRound.bind(this);
  }

  checkSpecialRound : () => void = () => {
    const specialRound = document.querySelectorAll('input[name=\'bonus\']');
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
    if (event.target.id) {
      value = Number(event.target.id)
    }
    this.setState({
      currentPage: value,
    });
  }

  pickJoker = () => {
    const radio = document.querySelectorAll('input[name=\'joker\']');
    for (const node of Array.from(radio)) {
      if (node.checked) {
        this.setState({ joker: node.value.toString() });
        break;
      }
    }
  }

  updateScore = (event: React.MouseEvent<HTMLButtonElement>) => {
    const round = event.target.value;
    const answerBoxes = document.querySelectorAll(`input[id~='round${round}answer']`);
    const answers : string[] = [];
    answerBoxes.forEach((answer) => answers.push(answer.value.toString()));
    const checkboxes = document.querySelectorAll(`input[id~='round${round}']`);
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
          + this.state.r7info.score + this.state.r8info.score + this.state.jokerScore,
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
    const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

    const renderPageNumbers = pageNumbers.map((num) => (
      <li
        key={num}
        id={num.toString()}
        onClick={this.handleClick}
      >
        {num}
      </li>
    ));

    const {
      currentPage, r1info, r2info, r3info, r4info, r5info, r6info, r7info, r8info, score,
    } = this.state;
    let currentRound;
    if (this.state.currentPage === 1) {
      currentRound = (
        <RoundOne
          updater={this.updateScore}
          info={r1info}
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
        <RoundThree
          updater={this.updateScore}
          info={r3info}
        />
      );
    } else if (currentPage === 4) {
      currentRound = (
        <RoundFour
          updater={this.updateScore}
          info={r4info}
        />
      );
    } else if (currentPage === 5) {
      currentRound = (
        <RoundFive
          updater={this.updateScore}
          info={r5info}
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
        <RoundSeven
          updater={this.updateScore}
          info={r7info}
        />
      );
    } else if (currentPage === 8) {
      currentRound = (
        <RandomRound
          updater={this.updateScore}
          info={r8info}
        />
      );
    }

    return (
      <div>
        <h2>GEEKS WHO DRINK Scoresheet</h2>
        <hr />
        <h4>
          {'Your Current Score is '}
          {score}
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
