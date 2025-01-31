const CalculateWinner = (boxes) => {
    const winningLines = [
        // Horz
        [0,1,2],
        [3,4,5],
        [6,7,8],
        // Vert
        [0,3,6],
        [1,4,7],
        [2,5,8],
        // Diagonal
        [0,4,8],
        [2,4,6]
    ];
    // more logic needed

    return (
        <div className="winner"></div>
    );
}

export default CalculateWinner;
