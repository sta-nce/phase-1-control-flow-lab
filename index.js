function scuberGreetingForFeet(distance){
  // Write your code here!
  let feet;
  if ( distance < 400 ) {
    feet = 'This one is on me!';
  } if ( distance > 2000 ) {
    feet = 'I will gladly take your thirty bucks.';
  } if ( distance > 2500) { 
    feet = 'No can do.';
  }
  return feet;
};

scuberGreetingForFeet(190);

function ternaryCheckCity( city ){
  // Write your code here!
  return city === 'NYC'?'Ok, sounds good.':'No go.'
};

ternaryCheckCity('NYC');

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}