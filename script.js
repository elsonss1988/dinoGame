const dino=document.querySelector('.dino');
const background=document.querySelector('.container');
let position=0;
let isJump=false;
function handleKeyUp(event){
    if(event.keyCode==32){
        console.log('igual a espaço');
        if(!isJump){
            jump();
        }
    }
}
function jump(){
    isJump=true;
   
    let upInterval=setInterval(()=>{
    if(position>=150){
        clearInterval(upInterval);        
        let downInterval=setInterval(()=>{
            if(position<=0){
                clearInterval(downInterval);
                isJump=false;  
            }else{
                position -= 20;
                dino.style.bottom=position+'px'
            }
        },20)
    }
    else{            
            position += 20;
            dino.style.bottom=position+'px';
            console.log(position)
        }
    },20);
}
function createCactus(){
    const cactus=document.createElement('div');
    let cactusPosition= 1000;
    let randomTime=Math.random()*6000;
    console.log(randomTime);
    cactus.classList.add('cactus');
    cactus.style.left=1000+'px';
    background.appendChild(cactus);
    let leftInterval=setInterval(()=>{        
        if(cactusPosition<-60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }
        else if(cactusPosition>0 && cactusPosition<60 && position<20){
            clearInterval(leftInterval);
            document.body.innerHTML='<h1 class="gameover">Fim de Jogo</h1>'
        }else{
            cactusPosition-=10;
            cactus.style.left=cactusPosition+'px';
        }
    },20)
    setTimeout(createCactus,randomTime);
}
createCactus();
document.addEventListener('keyup',handleKeyUp)

//console.log(dino);