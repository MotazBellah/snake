document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll('.grid div');
    const scoreDispaly = document.querySelector('span');
    const startBtn = document.querySelector('.start');

    const width = 10;
    let currentIndex = 0
    let appleIndex = 0
    let currentSnale = [2,1,0]
    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0

    // assign function to keycodes
    function control(e) {
        // Remove the snake from the grid
        squares[currentIndex].classList.remove('snake')

        if (e.keycode === 39) {
            // Press the right arrow on the keyboard
            direction = 1

        }
        else if (e.keycode === 38) {
            // Press up arrow, snake go back ten divs, appearing to go up
            direction = -width
        }
        else if (e.keycode === 37) {
            // Press left, the snake will go left one div
            direction = -1
        }
        else if (e.keycode === 40) {
            // Press down
            direction = +width
        }
    }

    document.addEventListener('keyup', control)

});
