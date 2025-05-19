console.log('connected event capturing');

// grandparent
document.getElementById('grandparent').addEventListener('click', function (event){
    console.log('grandparent');
    console.log(event);
    console.log(event.target);
}, true)

// parent
document.getElementById('parent').addEventListener('click', function(event){
    console.log('parent');
    console.log(event);
    console.log(event.target);
    // event.stopPropagation();
}, true)


// child
document.getElementById('child').addEventListener('click', function(event){
     console.log('child');
     console.log(event);
     console.log(event.target);
}, true)