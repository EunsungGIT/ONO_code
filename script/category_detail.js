var swiper = new Swiper('.situation', {
    slidesPerView: 4.3,
    spaceBetween: 20,
});

const title_a = document.querySelectorAll('.title a')
const container_weather = document.querySelectorAll('.container_weather')

const section_hide = ()=>{for(let i of container_weather){i.style.display = 'none'}}
section_hide()
container_weather[0].style.display = 'block'

title_a.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        section_hide()
        container_weather[i].style.display = 'block'
        for(let j of title_a){
            if(j === t){
                j.style.borderBottom = '2px solid #000030'
            }else{
                j.style.borderBottom = 'none'
            }
        }
    })
})