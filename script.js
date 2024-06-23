function display() {
  alert("Clicked. You may continue to the next question.");
}
function displayEnd() {
  alert("Clicked. Quiz completed. Find out what your business venture is!");
}

var qCounter = 0;
var techCounter = 0;
var marketingCounter = 0;
var mathCounter = 0;
var foodCounter = 0;


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");


var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");



var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");


var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

q1a1.addEventListener("click",tech);
q1a2.addEventListener("click",finance);
q1a3.addEventListener("click",entertainment);
q1a4.addEventListener("click",food);


q2a1.addEventListener("click",tech);
q2a2.addEventListener("click",finance);
q2a3.addEventListener("click",entertainment);
q2a4.addEventListener("click",food);

q3a1.addEventListener("click",tech);
q3a2.addEventListener("click",food);
q3a3.addEventListener("click",entertainment);
q3a4.addEventListener("click",finance);

q4a1.addEventListener("click",tech);
q4a2.addEventListener("click",finance);
q4a3.addEventListener("click",food);
q4a4.addEventListener("click",entertainment);

q5a1.addEventListener("click",tech);
q5a2.addEventListener("click",finance);
q5a3.addEventListener("click",food);
q5a4.addEventListener("click",entertainment);

var businesspath = document.getElementById("result");

function tech() {
  techCounter++;
  qCounter++;
  if(qCounter ==5)
   update();
}

function finance() {
  mathCounter++;
  qCounter++;
  if(qCounter ==5)
   update();
}
function food() {
  foodCounter++;
  qCounter++;
  if(qCounter ==5)
   update();
}
function entertainment() {
  marketingCounter++;
  qCounter++;
  if(qCounter ==5)
   update();
}
function update() {
  if(techCounter >=4) {
    result.innerHTML = "Your business path is geared towards technology! Given your skill attributes and problem-solving abilities, you are well-suited for the tech industry. You are a great out-of-the-box thinker. Creating your own startup company will allow you to be a part of the future of technology for social good.";
  }
  else if(mathCounter >=4) {
    result.innerHTML = "You are an execellent entrepreneur and you have an engineering skillset and mindset. You are well-suited for the finance industry. You are a great problem-solver and you are a great team member. Creating your own hedge-fund company with your team will allow you to be a part of the future of finance.";
  }
  else if(marketingCounter >=4) {
    result.innerHTML = "You are a marketer and good sales entrepreneur. You know how to entertain others. Creating your own personal company would allow you to utilize your marketing skills. Not only will building your own personal brand allow you to learn more about advertising and marketing, but it will allow you to fundamentally understand key components of business and development.";
  }
  else if(foodCounter >=4) {
    result.innerHTML = "You are a lifestyle enthusiast and enjoy food, especially healthy food. You are well-suited for the food and lifestyle industry. You are a great team player and are motivated in your eagerness to learn. Creating your own personal webpage and blog about your daily life will allow others to learn more about you. Digital marketing and branding is an excellent space for you to dive into.";
  }
  else {
      result.innerHTML = "Hmm. Something is off. Please try again.";
  }
}
