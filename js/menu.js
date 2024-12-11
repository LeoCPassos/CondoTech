

let menu = document.getElementById("menu")
let menusvg = document.getElementById("svgmenu")

function menutoggle(){

    menu.classList.forEach(c => {
        if (c != "hidden"){
            menu.classList.add("hidden");

            //<line x1="0" x2="24" y1="2" y2="2"/>
            //<line x1="0" x2="24" y1="12" y2="12"/>
            //<line x1="0" x2="24" y1="22" y2="22"/>
            menusvg.childNodes[1].setAttribute("x1","0")
            menusvg.childNodes[1].setAttribute("x2","24")
            menusvg.childNodes[1].setAttribute("y1","2")
            menusvg.childNodes[1].setAttribute("y2","2")
            
            menusvg.childNodes[3].setAttribute("class","")
            
            menusvg.childNodes[5].setAttribute("x1","0")
            menusvg.childNodes[5].setAttribute("x2","24")
            menusvg.childNodes[5].setAttribute("y1","22")
            menusvg.childNodes[5].setAttribute("y2","22")
            console.log();
        }
        else{
            menu.classList.remove("hidden");

            //<line x1="2" x2="22" y1="2" y2="22"/>
            //<line x1="2" x2="22" y1="22" y2="2"/>
            menusvg.childNodes[1].setAttribute("x1","2")
            menusvg.childNodes[1].setAttribute("x2","22")
            menusvg.childNodes[1].setAttribute("y1","2")
            menusvg.childNodes[1].setAttribute("y2","22")
    
            menusvg.childNodes[5].setAttribute("x1","2")
            menusvg.childNodes[5].setAttribute("x2","22")
            menusvg.childNodes[5].setAttribute("y1","22")
            menusvg.childNodes[5].setAttribute("y2","2")
    
            menusvg.childNodes[3].setAttribute("class","hidden")
            
        }
    });
    
}


