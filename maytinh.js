function  number(value) {
    document.getElementById('result').value += value;
}
function  out() {
    let a=document.getElementById('result').value ;
    let c=eval(a);
    document.getElementById('result').value= c;
}
function rs(){
    document.getElementById('result').value ='';
}