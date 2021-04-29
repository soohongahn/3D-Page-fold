var btn = document.getElementById("button");
var page = document.getElementById("top");
var flipped = 0;

btn.addEventListener('click', function(event){
  if(!flipped){
    btn.innerHTML = "CLOSE";
    flipped = 1;
    page.classList.remove("closePage");
    page.classList.add("openPage");

  } else{
    btn.innerHTML = "OPEN";
    flipped = 0;
    page.classList.remove("openPage");
    page.classList.add("closePage");
  }
})
