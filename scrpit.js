let input1 = document.querySelector(".q1");
let input2 = document.querySelector(".q2");
let button = document.querySelector("button");
 let p =document.querySelector(".results") 
button.addEventListener("click",function(){
  let answer1=input1.value
  let answer2=input2.value;
  console.log(answer1,answer2)
if(answer1=== "Y"&& answer2==="Y"){
p.innerHTML= "You need to get off the game"
}
})

button.addEventListener("click",function(){
    let answer1=input1.value
    let answer2=input2.value;
    console.log(answer1,answer2)
  if(answer1=== "N" && answer2==="N"){
  p.innerHTML= "You must be a basic person with a life"
  }
  })
    
  button.addEventListener("click",function(){
    let answer1=input1.value
    let answer2=input2.value;
    console.log(answer1,answer2)
  if(answer1=== "N" && answer2==="Y"){
  p.innerHTML= "Ik you like doing all the health in one hit"
  }
  })

  button.addEventListener("click",function(){
    let answer1=input1.value
    let answer2=input2.value;
    console.log(answer1,answer2)
  if(answer1=== "Y" && answer2==="N"){
  p.innerHTML= "You are a good person"
  }
  })