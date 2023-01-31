let data=[30,12,39,89,9,0,23,74]
let find=89
let pos=undefined;

for(let i=0;i<=data.length;i++){
    if(data[i]==find){
        pos=i;
        break
    }
}
console.log(pos);
if(!pos){
    alert("element not found")
}