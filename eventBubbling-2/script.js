console.log('connected event bubbling 2');

// grandmother
document.getElementById('grandmother').addEventListener('click', function (event) {
    console.log('grandmother');
    console.log(event);
    console.log(event.target);
}, false)


// mother
document.getElementById('mother').addEventListener('click', function (event) {
    console.log('mother');
    console.log(event);
    console.log(event.target);
    event.stopPropagation();
}, false)


// daughter
document.getElementById('daughter').addEventListener('click', function (event) {
    console.log('daughter');
    console.log(event);
    console.log(event.target);
}, false)