document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('grid-container');
    const totalSquares = 16 * 16;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        container.appendChild(square);
    }
});