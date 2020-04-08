'use strict';
//[2,4,1,1,2,3,7,1,1,3]
// Complete this algo
const minJumps = arr => {
  const len = arr.length;  //10
  if(len <= 1) return 0;
  let maxReach = arr[0];  //2
  let step = arr[0]; //2
  let jump = 1;

  for (let i = 1; i < len; i++){
    if(i === len -1){
      return jump;
    }
    if(i+arr[i] > maxReach){
      maxReach = i + arr[i];
    }
    step--;
    if(step === 0){
      jump ++;
      step = maxReach -i;
    }
  }
  return jump;
}

  // while (index < len){
  //   let current = arr[index];
  //   let subArr = arr.slice(index, index+current);
  //   let nextStep = Math.max(...subArr);
  //   index += nextStep;
  //   count ++;
  // }
  // return count;


module.exports = minJumps
