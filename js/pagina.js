const url = new URL(window.location.href)
const searchParam = new URLSearchParams(url.search)
//console.log(url)
//console.log(searchParam)

function loadPage(filename){
    var xhr= new XMLHttpRequest();
    xhr.open('GET', filename, true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        document.getElementById('page').innerHTML= this.responseText;
    };
    xhr.send();
}

const page = searchParam.get("page")
const logado = searchParam.get("logado")
const sindica = searchParam.get("sindica")

if (page == null) loadPage("home.html");
console.log(page)

if (page == "login") document.getElementById("nav").classList.add("hidden");
loadPage(page + ".html");

if (logado == "1"){
	document.getElementById("logado").classList.remove("hidden");
	document.getElementById("perfil").classList.remove("hidden");
	document.getElementById("logar").classList.add("hidden");
}

if (sindica == "1"){
	document.getElementById("sindica").classList.remove("hidden");
}

/*
switch(page){
    case "login": loadPage("login.html"); break;
    case "login": loadPage("login.html"); break;
    default: loadPage("teste.html"); break;
}
*/
