// random value generated
var y=Math.floor(Math.random()*10+1);


  
// counting the number of guesses
var x=document.getElementById("guessField").value ;
if(x==y){
alert("Congartulations!!!"+playername+"You Guessed it Right"
+guess+"Guess");
guess=1;


}
// made for correct Guess

  else if(x>y){
    guess++;
    alert("OOPS SORRY!!!TRY A SMALLER NUMBER ");
  }
  else{
    guess++;
    alert("OOPS SORRY!!! TRY A GREATER NUMBER")
  }


  function playAgain(){
    y=Math.floor(Math.random()* 10+1)
  }
// function for number guessed by user     
