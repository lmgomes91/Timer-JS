function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-br',{
        hour12: false,
        timeZone: 'GMT'
    })
}

const relogio = document.querySelector('.tempo')
const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const clear = document.querySelector('.clear')

let segundos = 0
let timer

function zeraRelogio(){
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
}

function iniciaRelogio(){
    zeraRelogio()
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

start.addEventListener('click', function(event){
    iniciaRelogio()
})

pause.addEventListener('click', function(event){
    clearInterval(timer)
})

clear.addEventListener('click', function(event){
    zeraRelogio()
})

/*
document.addEventListener('click', function(e){
    const e1 = e.target
    if(e1.classList.conatins('clear')){
        // faz a mesma coias que a função clear a cima
        // o mesmo raciociono vale para os outros botoes
    }
})*/