//dropdown//
var dropdownBtn = document.querySelector('.dropdown-btn');
var dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('mouseover', function () {
    dropdownContent.style.display = 'block';
});

dropdownBtn.addEventListener('mouseout', function () {
    dropdownContent.style.display = 'none';
});

dropdownContent.addEventListener('mouseover', function () {
    dropdownContent.style.display = 'block';
});

dropdownContent.addEventListener('mouseout', function () {
    dropdownContent.style.display = 'none';
});

//butons//
var directBtn = document.getElementById("home");

directBtn.addEventListener("click", function(){
    window.location.href="art-of-poko.html";
})

var directBtn = document.getElementById("media");

directBtn.addEventListener("click", function(){ 
    window.location.href= "https://www.cda.pl/"
})

//products//
document.addEventListener('DOMContentLoaded', function() {
    const productPage = document.querySelectorAll('.art-modal');

    productPage.forEach( function(div)  {
      div.addEventListener('click', function() {
      
        const destination = div.dataset.linck;
  
        window.location.href = destination;
      });
    });
  });
