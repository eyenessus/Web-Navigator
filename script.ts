let prompt = require('prompt-sync')();
import Stack from "./Structure/Stack/Stack";

let finish = false;
let showBack = false;
let showNext = false

let currentPage: string = 'Google'
let backPages = new Stack()
let nextPages = new Stack()

const showCurrentPage = (action: string) => {
  console.log(`\n${action}`);
  console.log(`Current page = ${currentPage}`);
  console.log('Back page = ', backPages.peek());
  console.log('Next page = ', nextPages.peek());
}

/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

const newPage = (page: string) => {
  backPages.push(currentPage)
  currentPage = page
  while (!nextPages.isEmpty()) {
    nextPages.pop()
  }
  showCurrentPage(currentPage)
}

showCurrentPage(currentPage);

while (finish == false) {
  let instructions = baseInfo

  if (!backPages.isEmpty()) {
    instructions += ', ' + backInfo
    showBack = true
  } else {
    showBack = false
  }

  if (nextPages.peek() != null) {
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  } else {
    showNext = false;
  }
  
  instructions = `${instructions}, ${quitInfo}.`;
  console.log(instructions);

}
