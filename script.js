var btn = document.getElementById("button");
var page = document.getElementById("top");

btn.addEventListener('click', function(event){
  page.classList.toggle("openPage");
})
