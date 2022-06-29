window.onload = function(){

    const  max_Bubbles  = 20 ;
    const colors =  ['red','blue','green','yellow'];

    let i =0;

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
            //div.innerHTML = `${i}`;
            div.id = `${i}`
            div.classList.add('bubble');
            div.style.left = `${x-radius}px`;
            div.style.top = `${y-radius}px`;
            div.style.height = `${radius*2}px`;
            div.style.width = `${radius*2}px`
            div.style.background = colors[colorOfBubble];

            i++;

            return {x,y,radius,colorOfBubble,div};   //returning the object 
    }   

    const bubbles = [];

        function init(){
            for(let i=0;i<max_Bubbles;i++){
                const bubble = makeBubble();
                bubbles.push(bubble);
                containerBox.appendChild(bubble.div);
                //console.log(bubble);
                
            }
        }

        let start = document.querySelector('.start');

        init();

        // start.addEventListener('click',init());

        let inner_div = document.querySelectorAll(".bubble");

        console.log(inner_div);
        

        for(let div of inner_div){
            div.onclick=clicked;
        }

        //console.log(bubbles[0].div);
        let new_arr=[];
        function clicked(e){
            let text = e.target.id;
            console.log(e);
            
            console.log(bubbles[text].div);
            
            containerBox.removeChild(bubbles[text].div)

             new_arr= bubbles.filter(elem =>  {

                // console.log(elem.div);
                
                return elem.div!=bubbles[text].div;
             });
          //  console.log(new_arr);
            
            
            
        
        } 

}