let factPlaceholder = document.getElementById("jenn-fact");
let showFact = document.getElementById("show-fact");

let facts = [
    'Jenn has a strong dislike for the word Penultimate.',
    'If Jenn had a super power she would want to be fluent in all languages.',
    'Jenn is not very good a networking, so she made a Resume T-shirt to help break the ice.',
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


console.log('Hi there! Welcome to my portfolio site. This site was built using Vanilla JavaScript, and I am in the process of converting it to React in the coming weeks. Thanks for popping in!');


