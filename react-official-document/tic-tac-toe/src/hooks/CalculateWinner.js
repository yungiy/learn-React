import { useState, useEffect } from 'react';

export function useCalculateWinner(squares) {
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [x, y, z] = lines[i];
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        setWinner(squares[x]);
        return; // 승자가 결정되면 더 이상 확인할 필요 없음
      }
    }
    setWinner(null); // 승자가 없으면 null 설정
  }, [squares]);

  return winner;
}