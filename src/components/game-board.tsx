import { GameBoardProps } from "@/assets/interfaces";
import Cell from "./cell";

function GameBoard({ visibleBoard, handleClick }: GameBoardProps): JSX.Element {
  function updateBoard(index: number) {
    handleClick(index);
  }
  return (
    <>
      <div className="row">
        <div className="col-5 m-0 p-0">
          {visibleBoard.map(({ element, index }) => {
            return (
              <Cell
                key={index}
                index={index}
                updateBoard={updateBoard}
                element={element}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GameBoard;
