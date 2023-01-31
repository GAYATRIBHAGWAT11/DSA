let queue=[]
let currSize=queue.length;
let maxSize=5;


// function enqueue(newVal){
//     if(currSize>=maxSize){
//        alert("queue is full")

//     }else{
//         queue[currSize]=newVal;
//         currSize;
//     }
// }

function enqueueWithBtn(newVal){
     newVal=document.getElementById('qEl').value  ;
    if(currSize>=maxSize){
       alert("queue is full")

    }else{
        queue[currSize]=newVal;
        currSize++
    }
}
function dispaly(){
    console.log(queue);
}

function dequeue(){
    if(isEmpty){
        for(let i=0; i<queue.length;i++){
           queue[i]=queue[i+1] 
        }
        currSize--;
        queue.length=currSize;
    }else{
        alert("queueu is already empty")
    }
}

function front(){
    if(isEmpty){
        console.log(queue[0]);
    }else{
        alert("queueu is empty")
    }
}

function rear(){
    if(!isEmpty){
        console.log(queue[currSize-1]);
    }else{
        alert("queueu is empty")
    }
}

function isEmpty(){
    if(currSize<=0){
        return true
    }else{
        return false
    }
}



// enqueue(10)
// enqueue(20)
// enqueue(30)
// dispaly()
// dequeue()