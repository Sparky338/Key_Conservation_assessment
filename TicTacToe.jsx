import {useState} from "react";
import Board from "./Board";

const TicTacToe = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currMove, setCurrMove] = useState(0);
    const xNext = currMove % 2 === 0;
    const currSquares = history[currMove];

    const handlePlay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrMove(nextHistory.length -1);
    }

    const moves = history.map((squares, move) => {
        let description;
        move > 0 ? description = `Go to move # ${move}` : "Go to game start!";


        return (
            <li key= {move}>
                <button onClick={() => setCurrMove(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNextPlayer = {xNext} squares = {currSquares} onSelection = {handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
};

export default TicTacToe;
