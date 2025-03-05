import Board from './Board.jsx';
import {useGameHistory} from '../hooks/GameHistory.js';

export default function Game() {

  const {
    history,
    currentSquares,
    xIsNext,
    handlePlay,
    jumpTo,
    handleReset
  } = useGameHistory(); // 커스텀 훅 사용

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "#" + move + "로 가기";
    } else {
      description = "시작하기";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onReset={handleReset} onplay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
