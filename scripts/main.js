var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, world';
// document.querySelector('html').onclick=function() {
//     alert('Ouch! stop poking me!');

// }
var myImage=document.querySelector('img');
myImage.onclick=function() {
    //alert('Ouch! image on click!');
    let mySrc=myImage.getAttribute('src');
    //let mySrc=myImage.src;
    if(mySrc == 'images/tree_image.jpg'){
        myImage.setAttribute('src', 'images/beauty.jpg'); 
    }else{
        myImage.setAttribute('src', 'images/tree_image.jpg');
    }
}