let clickme = document.getElementById('clickme')
let me = document.getElementById('me')
let cube = document.getElementById('cube')
let arr = []
let x=1
let y=1
let l=30
let m=30
let a,b
let array=['rotate3d(1,0,0,360deg','rotate3d(0,1,0,270deg)','rotate3d(1,0,0,-270deg)','rotate3d(1,0,0,270deg)',
            'rotate3d(0,1,0,-270deg)','rotate3d(1,1,0,180deg)']

function move(){
    if(x === 1 && y === 10){
        clickme.disabled = true
        return -1
    }
    else{
        if((a) ===570 && (y%2) ===0 && y){
            x -=1
            a = ((2*x)-1)*l
            me.style.left = `${a}px`
        }
        else if((a) ===570 && (y%2) ===1){
            y +=1
            b = ((2*y)-1)*m
            me.style.bottom = `${b}px`
        }
        else if((a) !==570 && (y%2) ===0){
            if((a) === 30){
                y +=1
                b = ((2*y)-1)*m
                me.style.bottom = `${b}px`
            }
            else{
                x -=1
                a = ((2*x)-1)*l
                me.style.left = `${a}px`
                
            }
        }
        else if((a) !==550 && (y%2) ===1){
            x += 1
            a = ((2*x)-1)*l
            me.style.left = `${a}px`
        }
    }
    console.log(`x = ${x}`)
    console.log(`y = ${y}`)
    
}

function random(){
    let z = Math.ceil(Math.random()*6)
    console.log(z)
    cube.style.transform = array[z-1]
    for(let i=0;i<z;i++){
        move()
    }
    check()
}

clickme.onclick = random
function check(){
    if(x===2 && y ===6){
        x = 5
        y = 2
        a = ((2*x)-1)*l
        b = ((2*y)-1)*m
        me.style.left = `${a}px`
        me.style.bottom = `${b}px`
    }
    else if(x===2 && y===10){
        x = 9
        y = 2
        a = ((2*x)-1)*l
        b = ((2*y)-1)*m
        me.style.left = `${a}px`
        me.style.bottom = `${b}px`
    }
    else if(x===9 && y===9){
        x = 7
        y = 5
        a = ((2*x)-1)*l
        b = ((2*y)-1)*m
        me.style.left = `${a}px`
        me.style.bottom = `${b}px`
    }
}