const humburger = document.getElementById('hum1');
const mediaNav = document.getElementById("nav");

humburger.addEventListener('click',function(){
    if(mediaNav.style.display === 'none'){
        mediaNav.style.display ='block';
    }
    else{
        mediaNav.style.display = 'none';
    }

    //humburger.style.background = 'red';

})