document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('grid-container');
    const resizeBtn = document.getElementById('resize-button');
    const MAX_SIZE = 100;

    //build grid
    function generateGrid(size) {
        container.innerHTML = '';

        //size of each square
        const containerSize = container.clientWidth;
        const cellSize = containerSize / size;

        const total = size * size;
        for (let i = 0; i < total; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.width = `${cellSize}px`;
            square.style.height = `${cellSize}px`;
            container.appendChild(square);

            // re‑attach hover listener from Phase 2
            square.addEventListener('mouseenter', () => {
                square.classList.add('hovered');
            });
        }
    }

    // 2) When they click “New Grid”, prompt for size
    resizeBtn.addEventListener('click', () => {
        let input = prompt(`Enter grid size per side (1-${MAX_SIZE}):`, 16);
        const n = Number(input);

        //validate
        if (!n || n < 1 || n > MAX_SIZE) {
            alert(`Please enter a whole number between 1 and ${MAX_SIZE}.`);
            return;
        }

        generateGrid(n);
    });

    // 3) Initial grid
    generateGrid(16);

});
