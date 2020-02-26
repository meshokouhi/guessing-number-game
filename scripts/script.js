
// Game values
let min = 1,
    max = 100,
    winningNum = getRandomNum(min, max),
    guessesNum = 1,
    color;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message'),
      mTitle=document.querySelector('.m-title');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;
      
// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else{

  // Check if won
  if(guess === winningNum){

    // Disable input
    guessInput.disabled = true;


    // PLay Again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
    
    
// Play again event listener
    game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
    window.location.reload();
  }
});
  // Set message
  if(guessesNum == 1){
  setMessage(`Wow mind reader!!You guessed correctly on your first guess.`, 'green');
}else if (guessesNum <= 5){
  setMessage(`Not bad... It only took you ${guessesNum} guesses to guess the correct number.`, 'orange');
}else{
  setMessage(`You guessed correctly. It took you ${guessesNum} guesses to guess the correct number.`, 'yellow');
};

  } else {
   guessesNum += 1; 
   if(guess < winningNum){
    setMessage(`Too low... let's try again...`, 'lightblue');
   }else{
     setMessage(`Too high...let's try again...`, 'red');
   };
  }
}});

// Get Winning Number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
  guessInput.style.borderColor = color;
  mTitle.style.color= color;
};