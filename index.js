function div(){
var num=document.getElementById("firstnumber").value;
var den=document.getElementById("secondnumber").value;
res(num,den);
}
function res(a,b) {
    if(parseInt(b)===0){
        document.getElementById("result").innerHTML="not defined";
        return "not defined";
    }
    else if (isNaN(a) || isNaN(b)){
        document.getElementById("result").innerHTML=0;
        return 0;
    }
    else{
    var d=parseInt(a)/parseInt(b);
    document.getElementById("result").innerHTML=d;
    return d;
    }
  }