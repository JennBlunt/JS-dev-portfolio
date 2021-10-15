let factPlaceholder = document.getElementById("jenn-fact");
let showFact = document.getElementById("show-fact");

let facts = [
    'Jenn has a strong dislike for the word Penultimate.',
    'Jenn is allergic to coffee, but not in a can’t-be-in-the-same-room type of allergy.',
    'Hank made Jenn realize she’s a dog person, not a puppy person.',
    'In grade 4, Jenn wrote a speech on procrastination, after leaving the assignment to the last minute.',
    'Jenn loves tea, which is handy given her allergy.'
]
let factNumber;

function randomFact() {
    return facts[factNumber];
}

showFact.addEventListener('click', function () {
    factNumber = Math.floor(Math.random() * 5);
    factPlaceholder.innerHTML = randomFact();
});



// const squares = document.querySelectorAll('.square')
// const mole = document.querySelector('.mole')
// const timeLeft = document.querySelector('#time')
// const score = document.querySelector('#score')

// let result = 0
// let hitPosition
// let currentTime = 30
// let timerId = null

// function randomSquare() {
//     squares.forEach(square => {
//         square.classList.remove('mole')
//     })

//     let randomSquare = squares[Math.floor(Math.random() * 9)]
//     randomSquare.classList.add('mole')

//     hitPosition = randomSquare.id
// }

// squares.forEach(square => {
//     square.addEventListener('mousedown', () => {
//         if (square.id == hitPosition) {
//             result++
//             score.textContent = result
//             hitPosition = null
//         }
//     })
// })

// function moveMole() {
//     timerId = setInterval(randomSquare, 800)
// }

// moveMole()

// function countDown() {
//     currentTime--
//     timeLeft.textContent = currentTime

//     if (currentTime == 0) {
//         clearInterval(countDownTimerId)
//         clearInterval(timerId)
//         alert('GAME OVER! Your final score is ' + result)
//     }

// }

// let countDownTimerId = setInterval(countDown, 1000)