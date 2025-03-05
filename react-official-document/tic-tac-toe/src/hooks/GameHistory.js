import { useState } from 'react';

export function useGameHistory() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  const handleReset = () => {
    setHistory([Array(9).fill(null)]); // 히스토리 초기화
    setCurrentMove(0); // 현재 이동 초기화
  };


  return {
    history,
    currentSquares,
    xIsNext,
    handlePlay,
    jumpTo,
    handleReset
  };
}
