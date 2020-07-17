//feetToMile

function feetToMile(feet){
    var mile =feet/5280;
    return mile;
}
var totalMile =feetToMile(456);
console.log(totalMile);


//woodCalculator
function woodCalculator(chair,table,bed){
    var chairCount = chair*1;
    var tableCount = table*3;
    var bedCount   = bed*5;
    var total = chairCount + tableCount + bedCount;
   return total;
}
var totalWood = woodCalculator(10,5,2);
console.log(totalWood);

//brickCalculator


function brickCalculator(floor) {
    var totalHeight = 0;
    var totalBricks = 0;
  for(var i = 1; i <= floor; i++) {
    if(i <= 10) {
      totalHeight = totalHeight + 15;
    }
    if(i > 10 && i <= 20) {
      totalHeight = totalHeight + 12;
    }
    if(i > 20 && i <= 45) {
      totalHeight = totalHeight + 10;
    }
  }
  totalBricks = totalHeight * 1000;
  return totalBricks;
}
console.log(brickCalculator(17));
console.log(brickCalculator(24));
//tinyFriend
function tinyFriend(name){
    var minName = name[0];
    for (var i =0; i<name.length; i++){
        var currentName = name[i];
        if (currentName<minName){
            minName=currentName;
        }
    }
    return minName;
}

var minName=tinyFriend(['mamun','emo','nomany'])
console.log(minName);
