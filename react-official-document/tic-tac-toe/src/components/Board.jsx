import SquareGrid from './SquareGrid.jsx';
import { useCalculateWinner } from '../hooks/CalculateWinner.js';

export default function Board({ xIsNext, squares, onplay }) {
  const winner = useCalculateWinner(squares);
  const isDraw = squares.every(square => square !== null); // 모든 사각형이 채워졌는지 확인

  const handleClick = (i) => {
    if (squares[i] || winner) {
      return; // 이미 선택된 사각형이거나 승자가 결정된 경우 클릭 무시
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O"; // 현재 플레이어에 따라 X 또는 O 설정
    onplay(nextSquares);
  };

  let status;
  if (winner) {
    status = "승자는 " + winner;
  } else if (isDraw) {
    status = "무승부입니다!";
  } else {
    status = "다음 플레이어는: " + (xIsNext ? 'X' : 'O');
  }

  const handleReset = () => {
    onplay(Array(9).fill(null)); // 게임 리셋: 모든 사각형을 null로 초기화
  };

  return (
    <>
      <div className="status">{status}</div>
      <SquareGrid squares={squares} onSquareClick={handleClick} />
      {(winner || isDraw) && ( // 승자 또는 무승부인 경우에만 리셋 버튼 표시
        <button onClick={handleReset}>게임 리셋</button>
      )}
    </>
  );
}
