window.onload = function(){

    const  max_Bubbles  = 20 ;
    const colors =  ['red','blue','green','yellow'];

    const containerBox = document.querySelector('.box');
    function makeBubble(){
        //pic random radius
       let radius =  Math.floor(Math.random()*100);



       //pic random color
           let colorOfBubble = Math.floor(Math.random()*10)%colors.length

           let random_offset = Math.floor(Math.random()*1000);

            let x = Math.floor(Math.random()*100)%550+random_offset;
            let y = Math.floor(Math.random()*100)%550+random_offset;

            let div = document.createElement('div');
            div.classList.add('bubble');
            div.style.left = `${x-radius}px`;
            div.style.top = `${y-radius}px`;
            div.style.height = `${radius*2}px`;
            div.style.width = `${radius*2}px`
            div.style.background = colors[colorOfBubble];

            return {x,y,radius,colorOfBubble,div};   //returning the object 
    }   

    const bubbles = [];

        function init(){
            for(let i=0;i<max_Bubbles;i++){
                const bubble = makeBubble();
                bubbles.push(bubble);
                containerBox.appendChild(bubble.div);
                console.log(bubble);
                
            }
        }

        let start = document.querySelector('.start');

        start.addEventListener('click',init());

}