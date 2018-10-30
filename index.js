// add solution here
function theBeatlesPlay (musicians,instrument){
  var newArray = [];
  
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] +' plays ' + instrument[i]);
  }
  
  return newArray;
}

function johnLennonFacts (facts){
  var newArray2 = [];
  var i =0;
  while(i<facts.length){
    newArray2.push(facts[i] +'!!!');
  }
}
function iLoveTheBeatles(x){
  var newArray3 = [];
  var i = x;
function incrementVariable() {
  i = i + 1;}
  do {
    newArray3.push('I love the Beatles!');
    incrementVariable();
  }while(i <15);
}
