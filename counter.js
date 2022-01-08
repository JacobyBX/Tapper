window.smallPopCount = 0; 

document.getElementById("Points").innerHTML = localStorage.getItem("A3muIln");
window.currentPoints = localStorage.getItem("A3muIln")
localStorage.setItem("A3muIln", currentPoints);

function pop(){
 document.getElementById('pop').play()
 smallPopCount = smallPopCount + 1;
 document.getElementById("tap-container").classList.add("filter");;

 setTimeout(function(){
    document.getElementById("tap-container").classList.remove("filter");;
}, 20)


 if(smallPopCount == 15){
    document.getElementById('success').play();
    smallPopCount = 0;
    currentPoints = parseInt(currentPoints) + 1;
    document.getElementById("Points").innerHTML = currentPoints.toString();localStorage.setItem("A3muIln", currentPoints);
    addPoint();
 }
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        pop() 
    }
}

function addPoint(){
    document.getElementById("addPointAnimation").style.display = "none";
    setTimeout(function(){
        document.getElementById("addPointAnimation").style.display = "block";
    }, 50);
    setTimeout(function(){
        document.getElementById("addPointAnimation").style.display = "none";
    }, 2000)
}