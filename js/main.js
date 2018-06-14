var openButton = document.querySelector('.burger');
var closeButton = document.querySelector('.cross');
var mainavUl =document.querySelector('#mainav');

openButton.addEventListener("click", function() {
    mainavUl.style.display = "block";
    openButton.style.display = "none";
    closeButton.style.display = "block";
    console.log('test');
    
    
})

closeButton.addEventListener("click", function() {
    mainavUl.style.display = "none";
    openButton.style.display = "block";
    closeButton.style.display = "none";
    console.log('test');
    
    
})




