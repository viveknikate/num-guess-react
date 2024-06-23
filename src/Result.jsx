
const Res = ({guess, actual}) =>{
     let result;
     if(guess)
          if(guess == actual){
               result = "Right";
          }else if(guess < actual){
               result = "Little more..";
          }else if(guess > actual){
               result = "Little less..";
          }else{
               result = "Enter Valid input";
          }
     return <h1 style={{textAlign:'center'}}>You Guess is : {result}</h1>
}

export default Res;