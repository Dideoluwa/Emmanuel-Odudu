let heading = document.querySelectorAll('.heading')
let work = document.querySelectorAll('.work-txt')
let close = document.querySelector('.click')
let open = document.querySelector('.logo')
let open2 = document.querySelector('.home')
let light = document.querySelector('.light-mode')
let dark = document.querySelector('.dark-mode')
let icon1 = document.querySelector('.first-icon')
let menu = document.querySelector('.menu')
let menuList = document.querySelector('.menu-list')
let openMenu = document.querySelector('.hamburger-icon')
let closeMenu = document.querySelector('.menu-close')
let icon2 = document.querySelector('.second-icon')
let icon3 = document.querySelector('.third-icon')
let nav = document.querySelector('nav')
let cover = document.querySelector('.init-cover')
let dateDisplay = document.querySelector('.date')
const cursorRounded = document.querySelector('.rounded');
const cursorPointed = document.querySelector('.pointed');

close.addEventListener('click', () => {
    cover.style.height = '0%'
})

open.addEventListener('click', () => {
    cover.style.height = '100%'
})
open2.addEventListener('click', () => {
    cover.style.height = '100%'
})

openMenu.addEventListener('click', () => {
    menu.style.width = '100%'
})
closeMenu.addEventListener('click', () => {
    menu.style.width = '0%'
})
menuList.addEventListener('click', () => {
    menu.style.width = '0%'
})

dark.addEventListener('click', () => {
    document.body.style.background = 'black'
    document.body.style.color = 'white'
    nav.style.backgroundColor = 'black'
    icon1.style.background = 'white'
    icon2.style.background = 'white'
    icon3.style.background = 'white'
    for(let head of heading)
    // head.style.color = 'rgb(239, 54, 57)'
    head.style.color = 'rgb(90, 90, 90)'
    for(let works of work){
        works.style.color = 'rgb(205, 205, 205)'
    }
})
light.addEventListener('click', () => {
    document.body.style.background = 'white'
    document.body.style.color = 'black'
    nav.style.backgroundColor = 'white'
    icon1.style.background = 'black'
    icon2.style.background = 'black'
    icon3.style.background = 'black'
    for(let head of heading)
    // head.style.color = 'rgb(112, 112, 187)'
    head.style.color = 'rgb(32, 32, 32)'
    for(let works of work){
        works.style.color = 'rgb(46, 46, 46)'
    }
})


setInterval((e) =>{
    let date = new Date();
    let month = date.toLocaleString('default', { month: 'long' });
    let h = date.getHours();
    let m = date.getMinutes();
    let d = date.getDay()
    let year = date.getUTCFullYear();
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    let newdate ='Ⓒ' + ' ' +h + ':' + m + ' ' +  '|'+ d + ',' + month + ' ' + year;
    dateDisplay.innerHTML = newdate
}, 1000)
