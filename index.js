let cardArray = [
    {
        'name' : 'Naruto',
        'img' : './images/Naruto_newshot.webp',
    },
    {
        'name' : 'Minato',
        'img' : './images/Minato.webp',
    },
    {
        'name' : 'Kakashi Hatake',
        'img' : './images/Kakashi.webp',
    },
    {
        'name' : 'Itachi',
        'img' : './images/Itachi.webp',
    },
    {
        'name' : 'Pain',
        'img' : './images/Pain.png',
    },
    {
        'name' : 'Sasuke',
        'img' : './images/Sasuke.jpg',
    }
]

let gameCardArray = cardArray.concat(cardArray)

let suffledChild = Array.from(gameCardArray).sort(() => 0.5-Math.random());
const parentDiv = document.querySelector("#card-section");

let count=0;
let firstCard="";
let secondCard="";
let firstid="";
let secondid="";
let completeCount = 0;

const win = ()=>{
    document.getElementById("heading").innerHTML = 'You have won mate!!!';
}
const matched_card = ()=>{
    completeCount++;
    let selected_cards = document.querySelectorAll('.selected-card');
    selected_cards.forEach(myfunction); 
     
    function myfunction(ele){
        ele.classList.add('same-card');
    }
    if(completeCount==6)
    {
            win();
    }
}

const resetGame=()=>{
    count = 0;
    firstCard="";
    secondCard="";
    let selected_cards = document.querySelectorAll('.selected-card');
    selected_cards.forEach(myfunction); 
     
    function myfunction(ele){
        ele.classList.remove('selected-card');
    }
}
parentDiv.addEventListener('click',(event)=>{
    let currentCard = event.target;
    if(currentCard.id === "card-section"){
        return false
    }
    count++;
    if(count<3){
        if(count===1){
            firstid = currentCard.parentNode.id
            firstCard = currentCard.parentNode.dataset.name;
            currentCard.parentNode.classList.add('selected-card');
        }
        else{
            secondid = currentCard.parentNode.id
            secondCard = currentCard.parentNode.dataset.name;
            currentCard.parentNode.classList.add('selected-card');           
        }
        if(firstCard!=="" && secondCard!=="")
        {
            if(firstCard===secondCard && firstid!==secondid){
                setTimeout(()=>{
                    matched_card();
                    resetGame();
                },1000)
            }
            else{
                setTimeout(()=>{
                    resetGame();
                },1000)
            }
        }

    }

})
let num=0;
for(let i=0;i<gameCardArray.length;i++){
    num++;
    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.setAttribute('id',num)

    childDiv.dataset.name = suffledChild[i].name
   // childDiv.style.backgroundImage = `url(${suffledChild[i].img})`
    const front_div = document.createElement('div');
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')

    back_div.style.backgroundImage = `url(${suffledChild[i].img})`;
    parentDiv.appendChild(childDiv)
    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}
