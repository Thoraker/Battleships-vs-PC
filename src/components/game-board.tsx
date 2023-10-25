import Cell from "./cell";

type GameBoardProps = {
    visibleBoard: number[],
    handleClick:
}

function GameBoard({ visibleBoard, handleClick }: number[]): JSX.Element {
    function updateBoard(index: number) {
        handleClick(index);
    }
    return (
        <>
            <div className='row'>

                <div className='col-5 m-0 p-0'>

                    {visibleBoard.map((element, index) => {
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
    )
}

export default GameBoard;