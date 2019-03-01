
//test script is linked

console.log('script linked correctly')


//select all relevant elements

//current dice rolled
let diceRolledText=document.getElementById('diceRolled');

console.log(`diceRolledText is ${diceRolledText}`);
//dice image
let diceImage=document.getElementById('diceImage');
console.log(`diceImage is ${diceImage}`);
//score text
let currentScore=document.getElementById('currentScore');
console.log(`currentScore is ${currentScore}`)
//dice button clickHandler
let clickHandler=document.getElementById('clickHandler');
//dice score
let diceRolled=document.getElementById('clickHandler');

console.log('**************************************************************')

let diceGame = {
    //array of filepaths to images of dice
    diceImages:['dice/dice1.png','dice/dice2.png','dice/dice3.png','dice/dice4.png','dice/dice5.png','dice/dice6.png'],
    //current dice score
    diceScore:0,
    //rolling a dice function
    rollDice:function(){
      let roll = Math.floor(Math.random()*6+1);
       console.log(roll);
       
       this.changeDiceImage(roll)
       this.changeCurrentScore(roll);
       this.checkSum();
    },
    changeDiceImage:function(dice){
     diceImage.src=this.diceImages[dice-1]
    },
    changeCurrentScore:function(dice){
        currentScore.innerText=`${dice}`
        //add to total
        if(dice===1){
            this.diceScore=0;
            currentScore.innerText=`${0}`
            diceRolledText.innerText='You Lose';
        }
        else{
          this.diceScore+=dice;
          diceRolledText.innerText=this.diceScore;

        }    
    },
    checkSum:function(){
        if(this.diceScore>=20){
            diceRolledText.innerText='You Win';
            this.diceScore=0;
            currentScore.innerText=`${0}`

        }
    }



}

//test that diceGame.rollDice() works

//diceGame.



clickHandler.addEventListener( 'click',()=>{
   

   

   
    
    

 
    diceGame.rollDice();
});

