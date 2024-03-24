const right_icon = document.querySelectorAll('header .right a')
const search_bg = document.querySelector('.search_bg')
const search_close = document.querySelector('.search #closeBtn')

search_bg.style.display = 'none'
right_icon[0].addEventListener('click',(e)=>{
    e.preventDefault()
    search_bg.style.display = 'block'
})
search_close.addEventListener('click',()=>{
    search_bg.style.display = 'none'
})