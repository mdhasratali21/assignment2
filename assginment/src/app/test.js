var a=[1,2,3,4];
var b=[1,3,5,8];
var c=a.concat(b);

var d=c.sort();
var e=[];
for(var i=0;i<d.length;i++){
    if(d[i]==d[i+1]){
    }
    else{
       e.push(d[i]);
    }

}
console.log(e)
