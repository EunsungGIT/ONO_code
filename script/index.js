/* LOADING */
const loading = document.querySelector('.loading')

window.addEventListener('load', () => {
    setTimeout(() => {
        loading.style.opacity = '0';
    }, 3000);

    setTimeout(() => {
        loading.style.display = 'none';
    }, 4000);
});

/* 슬라이드 메뉴 */
const slide = document.querySelector('.slide')

let open_slide = false
slide.addEventListener('click',()=>{
    open_slide = !open_slide
    if(open_slide === true){
        slide.style.transform = 'translateX(-150px)'
    }else {
        slide.style.transform = 'translateX(0px)'
    }
})