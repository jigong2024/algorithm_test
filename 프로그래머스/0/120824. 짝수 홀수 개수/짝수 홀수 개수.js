function solution(num_list) {
const evenArrLength = num_list.filter((num) => num % 2 === 0).length
const oddArrLength = num_list.length - evenArrLength
    return [evenArrLength, oddArrLength];
}