const Stack = require('./Stack.js');

const backPages = new Stack();
const nextPages = new Stack();
let currentPage = 'Start Page';

const showCurrentPage =(action:any) => {
  console.log(`\n${action}`);
  console.log(`Current page = ${currentPage}`);
  console.log('Back page = ', backPages.peek());
  console.log('Next page = ', nextPages.peek());
};

const newPage =(page)=>{
  backPages.push(currentPage);
  currentPage = page;
  while(!nextPages.isEmpty()){
    nextPages.pop();
  }
  showCurrentPage("NEW: ");
}

const backPage = () => {
   nextPages.push(currentPage);
   let removedValue = backPages.pop();
   currentPage = removedValue;
   showCurrentPage("NEW: ");
}

const NextPage = () => {
   backPages.push(currentPage);
   let removedValue = nextPages.pop();
   currentPage = removedValue;
   showCurrentPage("NEW: ");
}

const baseInfo = '\nEnter an url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '


let finish = false;
let showBack = false;
let showNext = false;

let instructions = `${baseInfo}`;
showCurrentPage('DEFAULT: '
);

while(finish === false){


  if(backPages.peek()!=null){
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;
  }
  else {
    showBack = false;
  }

 
  if(nextPages.peek()!= null){
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  }
  else {
    showNext = false;
  }

  instructions = `${instructions}, ${quitInfo}`;
  console.log(instructions);


const answer = prompt(question);
let lowerCaseAnswer = answer?.toLowerCase();
if ((lowerCaseAnswer !== 'b') && (lowerCaseAnswer !== 'n')&&(lowerCaseAnswer !== 'q')) {
  newPage(answer);
}
else if((lowerCaseAnswer === 'b') && (showBack === true))
{
  backPage();
}
else if(lowerCaseAnswer ==="b"){
  console.log("You didn't visit any pages yet, you can't go back.");
}
else if((lowerCaseAnswer === 'n') && (showNext === true))
{
  NextPage();
}
else if(lowerCaseAnswer ==="n"){
  console.log("You didn't visit any pages yet, you can't go foward.");
}
else if(lowerCaseAnswer === "q"){
  finish = true;
}
}