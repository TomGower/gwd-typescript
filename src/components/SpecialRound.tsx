import React, { FunctionComponent } from 'react';

interface IProps {
  checkSpecialRound: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const SpecialRound : FunctionComponent<IProps> = ({ checkSpecialRound }) => (
  <div>
    <p>Pick which rounds are special 16-point rounds!</p>
    <div>
      <label htmlFor="Bround1">
        <input type="checkbox" id="Bround1" name="bonus" value="r1" />
        Round 1
      </label>

      <label htmlFor="Bround3">
        <input type="checkbox" id="Bround3" name="bonus" value="r3" />
        Round 3
      </label>

      <label htmlFor="Bround4">
        <input type="checkbox" id="Bround4" name="bonus" value="r4" />
        Round 4
      </label>

      <label htmlFor="Bround5">
        <input type="checkbox" id="Bround5" name="bonus" value="r5" />
        Round 5
      </label>
    </div>
    <div>
      <button type="submit" id="bonusButton" onClick={checkSpecialRound}>Submit Special 16-Point Round Selections</button>
    </div>
  </div>
);

export default SpecialRound;
