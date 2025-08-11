function solution(st) {
 
    const a = st.split("").filter((a) => !isNaN(a));
    const b = a.map((b) => Number(b)).sort((a, b) => a - b);   
    return b;
}