const MAX_NUM = 100;
const MIN_NUM = 1;
const CRACKLE_DIVISOR = 3;
const POP_DIVISOR = 5;

function cracklePop () {
  let counter = MIN_NUM;
  
  // assuming we're counting up
  while (counter <= MAX_NUM) {
    const isCrackle = counter % CRACKLE_DIVISOR === 0;
    const isPop = counter % POP_DIVISOR === 0;
  
    if (isCrackle && isPop) {
    	console.log('CracklePop');
    } 
    else if (isCrackle) {
    	console.log('Crackle');
    }
    else if (isPop) {
    	console.log('Pop');
    }
    else {
    	console.log(counter);
    }
    ++counter;
  }
}

cracklePop();
