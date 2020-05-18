document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll('.grid div');
    const scoreDispaly = document.querySelector('span');
    const startBtn = document.querySelector('.start');

    const width = 10;
    let currentIndex = 0
    let appleIndex = 0
    let currentSnake = [2,1,0]
    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0

    // to start and Restart the game
    function startGame() {
        currentSnake.forEach((i) => {
            squares[i].classList.remove('snake')
        });
        squares[appleIndex].classList.remove('apple');
        clearInterval(interval);
        score = 0;
        // randomApple()
        direction = 1
        scoreDispaly.innerText = score
        intervalTime = 1000
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach((i) => {
            squares[i].classList.add('snake')
        });
        interval = setInterval(moveOutcomes, intervalTime)
    }

    // funtion that deals with all the outcomes move of the snake
    function moveOutcomes() {
        // deals with the snake hitting boarder and snake hitting self
        if (
            (currentSnake[0] + width >= (width * width) && direction === width) || //if snake hits bottom
            (currentSnake[0] % width === width - 1 && direction === 1) || //if snake hits right wall
            (currentSnake[0] % width === 0 && direction === -1) || // if snake hits left wall
            (currentSnake[0] - width < 0 && direction === -width) || // if snake hits th top
            squares[currentSnake[0] + direction].classList.contains('snake') // if snake goes into itself
        ) {
            return clearInterval(interval)
        }

        const tail = currentSnake.pop() // get the last item of the array
        squares[tail].classList.remove('snake') // remove class snake from the tail
        currentSnake.unshift(currentSnake[0] + direction) // gives direction to the head of the array

        //deals with snake getting apple
       if(squares[currentSnake[0]].classList.contains('apple')) {
           
         squares[currentSnake[0]].classList.remove('apple')
         squares[tail].classList.add('snake')
         currentSnake.push(tail)
         randomApple()
         score++
         scoreDisplay.textContent = score
         clearInterval(interval)
         intervalTime = intervalTime * speed
         interval = setInterval(moveOutcomes, intervalTime)
       }
       squares[currentSnake[0]].classList.add('snake')

    }


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
