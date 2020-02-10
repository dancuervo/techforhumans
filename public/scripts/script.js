//blinking greeting
let greet = document.querySelector('#greetings')
let colors = ['#E9492F', '#A63E1D', '#599998', '#425C6E', '#85644F', '#613F26', '#9A9999'];


setInterval( ()=>{
    greet.style.color = colors[Math.floor(Math.random()*colors.length)]
}, 1500)
