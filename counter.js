window.smallPopCount = 0; 

document.getElementById("Points").innerHTML = localStorage.getItem("A3muIln");
window.currentPoints = localStorage.getItem("A3muIln")
localStorage.setItem("A3muIln", currentPoints);

function pop(){
 document.getElementById('pop').play()
 smallPopCount = smallPopCount + 1;

 if(smallPopCount == 15){
    document.getElementById('success').play();
    smallPopCount = 0;
    currentPoints = parseInt(currentPoints) + 1;
    document.getElementById("Points").innerHTML = currentPoints.toString();localStorage.setItem("A3muIln", currentPoints);

 }
}