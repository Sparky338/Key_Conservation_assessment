import {useState} from "react";

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
};

export default TicTacToe;
