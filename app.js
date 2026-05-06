let Menubar = document.getElementById('Menubar')
let Mark = document.getElementById('Mark')
function OpenMenu(){
    if(Menubar.style.height == '0px'){
        Menubar.style.height = '300px'
        Menubar.style.transition = '.7s ease-in-out'
        Mark.classList.remove('fa-bars')
        Mark.classList.add('fa-xmark')
    }
    else{
        Menubar.style.height = '0px'
        Menubar.style.transition = '.7s ease-in-out'
        Mark.classList.remove('fa-xmark')
        Mark.classList.add('fa-bars')
    }
}