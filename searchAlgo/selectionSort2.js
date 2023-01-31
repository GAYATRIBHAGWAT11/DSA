let items=[20,12,53,3,56,78,0,5,89,34]
// console.log(data.sort((a,b)=>a-b));


function selectionSort(data) {
    // console.log(items);
    for (let i = data.length-1; i>=0; i--) {
        let minVal = i
        for (let j = i - 1; j>=0; j--) {
            if (data[j] < data[minVal]) {
                minVal = j
            }
        }
        let temp = data[minVal]
        data[minVal] = data[i]
        data[i] = temp
    }
}
selectionSort(items)
console.log(items);
