// time complexity=> O(n^2)

let items = [10, 12, 53, 3]

function selectionSort(data) {
    // console.log(items);
    for (let i = 0; i <= data.length-1; i++) {
        let minVal = i
        for (let j = i + 1; i <= data.length-1; j++) {
            if (data[j] < data[minVal]) {
                minVal = j
            }
        }
        let temp = data[minVal]
        data[minVal] = data[i]
        data[i] = temp
    }
    return data
}
console.log(selectionSort(items))
