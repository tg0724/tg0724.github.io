// // console.log('hello world');
//
//
// var myStudentDebt = 800;
// myStudentDebt = myStudentDebt - 100;
//
// var myLuckyNumbers = [3, 8, 12];
// console.log(myLuckyNumbers);
// console.log(myLuckyNumbers[0]);
//
// myLuckyNumbers[1] = 15;
// console.log(myLuckyNumbers[1]);
//
// add(10,10);
//
// function addFive(x) {
//   return x + 5;
// }
//
// function add(x, y){
//   console.log(x + y);
// }
//
// // addFive(10);
// // add(8, 9);
// // add("claudia" + "chen");
//
// var myAge = 19;
// if (myAge < 21){
//   console.log("u can't party");
// } else {
//   console.log("part on!")
// }
//
// //loops
// var hamburgers = 0;
//
// for (var i = 0; i < 10; i = i + 1){
//   hamburgers++;
//   console.log(hamburgers);
// }

// console.log("How many licks does it take to get to the center of a tootsie pop?");
//
//
//
// function asMrOwl(numOfLicks){
//   for(var licks = 1; licks <= numOfLicks; licks++){
//     if (licks < numOfLicks) {
//       console.log("ahhh" + licks);
//     } else {
//       console.log("Crunch!!!")
//     }
//   }
// }
//
// asMrOwl(18);

function checkerboard(width,height){


var checkerboard = ""
for (j = 0; j < height; j++){
  if (j % 2){
  for (i = 0; i < width; i++){
    if (i % 2){
        checkerboard = checkerboard + "#"
      } else {
        checkerboard = checkerboard + " "
      }
    }
  } else {
  for (i = 0; i < width; i++){
    if (i % 2){
        checkerboard = checkerboard + " "
      } else {
        checkerboard = checkerboard + "#"
      }
    }

  }
    checkerboard = checkerboard + "\n"

}
console.log(checkerboard);
}
