// rear= add
// front=>remove

class Queue{
    constructor(size){
        this.max=size;
        this.items=new Array(size);
        this.currSize=0;
        this.rear=-1;
        this.front=-1;
    }
    enqueue(val){
        if(this.currSize!=this.max){
            if(this.currSize==this.max-1){
                this.rear=0
            }else{
                this.rear++
            }
            this.rear++
            this.items[this.rear]=val;
            this.currSize++;
            if((this.front=-1)){
                this.front=this.rear
            }
        }
    }

    dequeue(){
        if(this.currSize!=0){
            this.items[this.front]=null;
            if(this.front==this.max-1){
                this.front=0
            }else{
                this.front++
            }
            this.currSize--
        }else{
            this.front-1
            this.rear=-1
            alert("queu is full")
        }
    }
}
let queue=new Queue(5)