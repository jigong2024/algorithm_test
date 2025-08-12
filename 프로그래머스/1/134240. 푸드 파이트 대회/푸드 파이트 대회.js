function solution(food) {
  let arr = [];

    for(let i = 1; i < food.length; i++) {
        if(food[i] === 1) {
          continue;
        } else {
          arr.push(String(i).repeat(Math.floor(food[i]/2)));
        }  

    }
    
     return arr.join("") + "0" + arr.reverse().join("");
}