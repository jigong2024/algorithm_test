function solution(nums) {
    const 골라야하는폰켓몬수 = nums.length/2;
 
    const arr1 = new Set(nums);
    const arr2 = [... arr1];
    
    if (골라야하는폰켓몬수 < arr2.length) {
        return 골라야하는폰켓몬수;
    } else {
          return arr2.length; 
    }
}