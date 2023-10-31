import {gk} from  "./data.js";


const section = document.querySelector(".sec");
const button = document.querySelector(".begin");
const check = document.querySelector(".check");
const startover = document.querySelector(".start"); 

  let result= 0;
  function page (){
    section.innerHTML =  " ";
    startover.style.display= "none";
    button.style.display = "none";
    check.style.display = "block";
    gk.forEach((question , index) => {
      const questionNo = document.createElement("div");
      questionNo.classList.add("question");
      questionNo.innerHTML= `<p>Q ${index +1}:${question.question}</p>`;
      const answerNo = document.createElement("div");
      answerNo.classList.add("answer");
   
   
   
      question.answer.forEach((answers , answersIndex) => {

        const answerButton = document.createElement('button');
        answerButton.textContent = answers.text;

       answerNo.appendChild(answerButton);
      
        answerButton.setAttribute("id" , answers.correct);
       
       answerButton.addEventListener('click' ,()=>checkAnswer(answers.correct , answerButton));
       answerButton.addEventListener('click' ,(e)=>{
       // const correctButton = answerButton.closest('.answer').querySelector("answerButton[data-correct='true']");

      const trueButton =answerButton.closest('.answer').querySelector("#true");
      
         trueButton.classList.add("correct");
        
      
      
       });


        
      });
      section.appendChild(questionNo);
      section.appendChild(answerNo);

    });
     

  }
    button.addEventListener('click' , page)
 
  function checkAnswer( correct , button){
   
    if(correct){
      result++;
      button.classList.add("correct");
    }else{
      button.classList.add("incorrect");
    }
      console.log("answer  corect"+ correct);
      console.log(result);


    console.log("hello");
    const buttonsInClickedQuestion = button.closest('.answer').querySelectorAll("button");
    buttonsInClickedQuestion.forEach(e => e.disabled = true);
   
  
  
  }
  check.addEventListener('click',results);
   function results(){
    if(result<5){
      section.innerHTML = `<h2>congratulations ! you completad the quiz🥳 .</h2>
      <h4>let's see how smart you are!</h4>
       <h3>you scored ${result} out of ${gk.length}</h3>
       <h3>that means ,you are really stupid 😂.</h3>
  <br>
  </br>
 `;
   
    }else if(result>=5&& result<8){
      section.innerHTML =  `<h2>congratulations ! you completad the quiz 🥳.</h2>
      <h4>let's see how smart you are!</h4>
       <h3>you scored ${result} out of ${gk.length}</h3>
       <h3>that means ,you are smart but not as much as me🫥 .</h3>
       <br>
       </br>
       `;
       
  
    }else if(result<=8){
      section.innerHTML =  `<h2>congratulations ! you completad the quiz 🥳.</h2>
      <h4>let's see how smart you are!</h4>
       <h3>you scored ${result} out of ${gk.length}</h3>
       <h3>that means ,you are smart but i bet you are not smarter than me 👍🏻😎 .</h3>
       <br>
       </br>
       `;
        
  
    }
    check.style.display="none";
    startover.style.display="block";
   }

startover.addEventListener('click', page);

