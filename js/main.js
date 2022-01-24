var itemImage = document.querySelectorAll('img');
var lightBoxContainer = document.getElementById('lightBoxContainer');
var lightBoxItem = document.getElementById('lightBoxItem');
var closeIcon = document.getElementById('closeIcon');
for (var i = 0 ; i < itemImage.length ; i++){
    itemImage[i].addEventListener('click' , function(e){
        lightBoxContainer.style.display = ' flex';
console.log(lightBoxContainer)


     var imgSrc = e.target.src;

     lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
  
     
    })
}
closeIcon.addEventListener('click' ,function(){
    lightBoxContainer.style.display = 'none';
})

lightBoxContainer.addEventListener('click' ,function(){
    lightBoxContainer.style.display = 'none';
})
