function solution(n) {
    const numberArr = String(n).split("").map((a) => Number(a));
    return numberArr.reduce((a, b) => a + b);
    
}