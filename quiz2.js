import {psycholozy} from  "./data.js";
const section = document.querySelector(".sec");

const check = document.querySelector(".check");
const startover = document.querySelector(".start"); 
const psy = document.querySelector(".Psycho"); 
let result = 0;

function show(){
    section.innerHTML =  " ";
    startover.style.display= "none";
   
    check.style.display = "block";
  psycholozy.forEach((question , index) => {

      const questionNo = document.createElement("div");
      questionNo.classList.add("question");
      questionNo.innerHTML= `<p>Q ${index +1}:${question.question}</p>`;
      const answerNo = document.createElement("div");
      answerNo.classList.add("answer");
   
     question.answer.forEach((answers) => {
  
        const answerButton = document.createElement('button');
        answerButton.textContent = answers.text;
  
       answerNo.appendChild(answerButton);
      

       
      answerButton.addEventListener('click' ,()=>checkAnswer(answers.correct , answerButton));
       
  
        
      });
      section.appendChild(questionNo);
      section.appendChild(answerNo);
  
    });
     
  
  }
  psy.addEventListener('click' , show);
   function checkAnswer( correct , button){
  
 if(correct){
      result++;
      button.classList.add("selected");
    }else{
    button.classList.add("deselected");
    }
     const buttonsInClickedQuestion = button.closest('.answer').querySelectorAll("button");
     buttonsInClickedQuestion.forEach(e => e.disabled = true);
    
   }
  check.addEventListener('click',results);
   function results(){
  if(result<5){
 section.innerHTML = `<h2>congratulations ! 🥳you completed the test</h2> 
 <h4>let's if you are a psychopath!</h4>
  <h3>you scored ${result} out of ${psycholozy.length}</h
  <h3>&nbsp;that means ,you are not a paychopath 🥳.</h3>
   <br>
   </br>
    `;
      }else if(result>=5&& result<8){
      section.innerHTML =  `<h2>congratulations !🥳 you completed the test</h2> 
      <h4>let's if you are a psychopath!</h4>
       <h3>you scored ${result} out of ${psycholozy.length}</h
       <h3>&nbsp;that means ,you can be a paychopath . I am not sure ..👍🏻.</h3>
       <br>
      </br>
       `;
       
  
    }else if(result<=8){
      section.innerHTML =  `<h2>congratulations 🥳! you completed the test</h2> 
      <h4>let's if you are a psychopath!</h4>
       <h3>you scored ${result} out of ${psycholozy.length} .</h
       <h3> &nbsp;that means ,you are a paychopath . unfortunatly🙂</h3>
       <br>
       </br>
       `;
        
  
    }
    check.style.display="none";
    startover.style.display="block";
   }
 startover.addEventListener('click', show);