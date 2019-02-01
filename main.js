var boxDiv = document.querySelector('.rotating-element');
var clickButton = document.querySelector('.trigger');
var imageLink = document.querySelector('.image');
link1 = "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
link2 = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

function secondRotation () {
  setTimeout(function() {   
    boxDiv.style.transform = "rotate(-45deg)";
    imageLink.src = link2;    
    console.log('second rotation');             
      }, 1500);   
      reloadPage();
    }

    function reloadPage() {
      setTimeout(function() {
        console.log('page reload')
        location.reload();
      }, 3000);
    
    }

// now I'm going to add an event listener to the button. Basically, this tells
// JavaScript, 'When the user clicks on this button, something is going to happen.'

clickButton.addEventListener('click', function() {  
    boxDiv.style.transform = 'rotate(45deg)';
    console.log('first rotation'); 
    secondRotation();  
    imageLink.src = link1;
    
  });

