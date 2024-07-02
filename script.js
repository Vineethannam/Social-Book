// Drop down menu
let settingsmenu = document.querySelector(".settings-menu");


function settingsmenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
// dark mode
let darkbtn = document.getElementById("dark-btn");
darkbtn.onclick = function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}
if(localStorage.getItem("theme")=="light"){
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
localStorage.setItem("theme","light");
}
