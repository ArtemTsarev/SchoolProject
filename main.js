const page = document.querySelector(".page");
const menu = document.querySelector(".description__profile");
const settings = document.querySelector(".settings");
const warning = settings.querySelector(".settings__warning");
const name = document.querySelector(".description__profile-username");
const username = settings.querySelector(".settings__username");
const complete = settings.querySelector(".settings__complete");
const body = document.querySelector("body");
let newUsername;



const settingsClose = settings.querySelector('.settings__close').addEventListener('click', function(){
    settings.classList.add("settings");
    settings.classList.remove("settings-visiable");
    page.style.opacity = "1";
    body.style.overflow = "scroll";
});




const settingsBtn = menu.querySelector(".description__profile-settings").addEventListener("click", function(){
    settings.classList.add("settings-visiable");
    settings.classList.remove("settings");
    settings.style.opacity = "109000000";
    page.style.opacity = ".3";
    body.style.overflow = "hidden";
});

function getUsername(){
    let usernameValue = username.value;
    if(usernameValue.split('').length <= 3){
        warning.textContent = "Имя слишком короткое";
        username.style.borderLeft = "6px solid darkred";
        complete.setAttribute("disabled" , "");
        
    }else if(usernameValue.split('').includes(";")){
        warning.textContent = `Имя не может содержать ";"`;
        username.style.borderLeft = "6px solid darkred";
        complete.setAttribute("disabled", "");
        complete.classList.add("disabled");
       
    }else if(usernameValue.split("")[0] == "."){
        warning.textContent = "Имя не может начинаться с точки";
        username.style.borderLeft = "6px solid darkred";
        complete.setAttribute("disabled", "");
        complete.classList.add("disabled");
        
    }else if(usernameValue.split("").length > 20){
        warning.textContent = "Имя не может содержать больше 20 символов";
        complete.setAttribute("disabled", "");
        complete.classList.add("disabled");
    }

    else if(usernameValue == "" || usernameValue == null){
        warning.textContent = "Имя не может быть пустым";
        username.style.borderLeft = "6px solid darkred";
        complete.setAttribute("disabled","");
        complete.classList.add("disabled");
    }   
    else{
        warning.textContent = "";
        newUsername = usernameValue;
        username.style.borderLeft = "6px solid green";
        complete.removeAttribute("disabled");
        complete.classList.remove("disabled");
    }
}

function setUsername(){
    name.textContent = newUsername;
    settings.classList.add("settings");
    settings.classList.remove("settings-visiable");
    page.style.opacity = "1";
}
