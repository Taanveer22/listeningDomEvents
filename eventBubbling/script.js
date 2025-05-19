console.log('connected event bubbling');

// grandparent
document.getElementById('grandparent').addEventListener('click', function (event) {
    console.log('grandparent');
    console.log(event);
    console.log(event.target);
})

// parent
document.getElementById('parent').addEventListener('click', function(event){
    console.log('parent');
    console.log(event);
    console.log(event.target);
})  

// child
document.getElementById('child').addEventListener('click', function (event){
    console.log('child');
    console.log(event);
    console.log(event.target);
})