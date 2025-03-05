import Square from './Square.jsx';
export default function SquareGrid({ squares, onSquareClick }) {
  return (
    <div>
      {Array(3).fill(null).map((_, row) => (
        <div className="board-row" key={row}>
          {Array(3).fill(null).map((_, col) => {
            const index = row * 3 + col; // 0~8 인덱스 계산
            return (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => onSquareClick(index)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}