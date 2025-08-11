function solution(cards1, cards2, goal) {
    let c1 = [...cards1];
    let c2 = [...cards2];
    
 for(let i = 0; i < goal.length; i++) {
     if(c1[0]  === goal[i]) {
                c1.shift()
            } else if (c2[0] === goal[i]) {
                c2.shift()
            } else {
                        return "No"
            }
 }
 return "Yes";
}