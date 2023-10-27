import { CellContentProps, CellProps } from "@/assets/interfaces";

/**
 * Renders a single cell element for the game board.
 */
function Cell({ element, updateBoard, index }: CellProps): JSX.Element {
  const cellContent: CellContentProps = {
    0: <i className="bi bi-circle"></i>,
    6: <i className="bi bi-circle-fill text-secondary"></i>,
    7: <i className="bi bi-circle-fill text-danger"></i>,
  };

  function handleClick() {
    updateBoard(index);
  }

  return (
    <div
      className="col-1 border border-secondary text-center bg-info p-0"
      onClick={handleClick}
    >
      {cellContent[element] || element}
    </div>
  );
}

export default Cell;
