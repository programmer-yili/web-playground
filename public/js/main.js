
const timeElement = document.getElementById('time')

timeElement.innerHTML = "当前时间：" + new Date().toString("M/d/yyyy")

const interval = setInterval(()=>{
    timeElement.innerHTML = "当前时间：" + new Date().toString("M/d/yyyy")
}, 1000)

const sloganElement = document.getElementById('slogan')

document.getElementById('logo').addEventListener('mouseover', ()=> {
    sloganElement.style.color = '#000'
    sloganElement.style.textShadow = '0 5px 5px rgba(0, 0, 0, 0.2)'
})

document.getElementById('logo').addEventListener('mouseout', ()=> {
    sloganElement.style.color = '#fff'
    sloganElement.style.textShadow = 'none'

})

