
/*code to store user input number-1 and number-2 in new variables input1 and inpute2 also user selected operator store in input3 variable */
var input1=document.querySelector("#number-1");
var input2=document.querySelector("#number-2");
var input3=document.querySelector("#operator");

/*code for submit button*/
var submit=document.querySelector(".btn");
submit.addEventListener("click",calculate);

/* EventListener to get empty answer window */
input1.addEventListener("click",emptyAnswer);
input2.addEventListener("click",emptyAnswer);
input3.addEventListener("click",emptyAnswer);



/*function to empty answer window*/
function emptyAnswer(){
    document.querySelector("#answer").value="";
}



/*function for calculations*/
function calculate(){
  var a=document.querySelector("#number-1").value;
  var b=document.querySelector("#number-2").value;

  /*made two input value variables to integer to avoid string output while doing addition*/
  a=parseInt(a);
  b=parseInt(b);

  var c=document.querySelector("#operator").value;

  /*if-else if statement used for user operators choice*/

  if(c === "add"){
    ans = a+b;
  }

  else if(c==="sub"){
    ans=a-b;
  }

  else if(c==="mult"){
    ans=a*b;
  }
  else{
    ans=a/b;
  }
  document.querySelector("#answer").value=ans;
}
