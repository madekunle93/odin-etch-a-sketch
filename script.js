document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('grid-container');
    const totalSquares = 16 * 16;

    // Phase 1: generate grid
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        container.appendChild(square);
    }

    //Phase 2: enable drawing on hover
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('hovered');
        });
    });
});