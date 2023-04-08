var iconbtn = document.querySelector('.icon')
var sidenavbar = document.querySelector('.side-nav')
var x = document.querySelector('.x')
var sidebarclose = document.querySelector('.closebtn')

iconbtn.addEventListener('click',()=>{
    sidenavbar.classList.toggle('closebtn')
    // console.log(iconbtn
});

x.addEventListener('click',()=>{
    sidenavbar.classList.toggle('closebtn')
    console.log(x)
});
