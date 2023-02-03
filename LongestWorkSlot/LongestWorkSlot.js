function findLongestSingleSlot(leaveTimes) {
    let startTime = 0, longestShift = 0;
    let employeeId = 0;
    leaveTimes.forEach((element, index)=> {
        let workSlot = element[1] - startTime;
        employeeId = workSlot > longestShift ? element[0] : employeeId;
        longestShift = workSlot > longestShift ? workSlot : longestShift;
        startTime = element[1]; 
    });
    const ids = 'abcdefghijklmnopqrstuvwxyz';
    return ids[employeeId]
}

console.log(findLongestSingleSlot([[0,3],[2,5],[0,9],[1,15]])); //b
console.log(findLongestSingleSlot([[0, 2], [1, 3], [0, 7]])); //a
console.log(findLongestSingleSlot([[0, 1], [0, 3], [4, 5], [5, 6], [4, 10]])); //e