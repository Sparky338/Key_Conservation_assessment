const Square = ({value, squareClick}) => {
    return (
        <button className="square" onClick={squareClick}>
            {value}
        </button>
    )
}

export default Square;
