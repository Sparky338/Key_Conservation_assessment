import {useState} from 'react';
import CalculateWinner from './Calculate_Winner';
import Square from './Square';

const Board = ({xIsNextPlayer, squares, onSelection}) => {

    const handleClick = (i) => {
        if (CalculateWinner(squares) || squares[i]) {
            return;
        };

        const nextSquares = squares.slice();

        xIsNextPlayer ? nextSquares[i] = "X" : nextSquares[i] = "O";

        onSelection(nextSquares);
    }

    const winner = CalculateWinner(squares);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next Player: ${xIsNextPlayer ? "X" : "O"}`;
    }

    return (
        <div className='main-board'>
            <div className='status'>{status}</div>
            <div className='board-row'>
                <Square value = {squares[0]} onSelection = {() => handleClick(0)} />
                <Square value = {squares[1]} onSelection = {() => handleClick(1)} />
                <Square value = {squares[2]} onSelection = {() => handleClick(2)} />
            </div>
            <div className='board-row'>
                <Square value = {squares[3]} onSelection = {() => handleClick(3)} />
                <Square value = {squares[4]} onSelection = {() => handleClick(4)} />
                <Square value = {squares[5]} onSelection = {() => handleClick(5)} />
            </div>
            <div className='board-row'>
                <Square value = {squares[6]} onSelection = {() => handleClick(6)} />
                <Square value = {squares[7]} onSelection = {() => handleClick(7)} />
                <Square value = {squares[8]} onSelection = {() => handleClick(8)} />
            </div>
        </div>
    );
};

export default Board;
