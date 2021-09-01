var output = document.querySelector("#output");
var principle = document.querySelector("#principle");
var rate = document.querySelector("#rate");
var time = document.querySelector("#time");
var n = document.querySelector("#n");


document.addEventListener('click',function calculate (){
    // var x = (Math.pow(1+(rate.value/n.value)),n.value*time.value);
    var x = (Math.pow((1 + (rate.value/n.value)),n.value*time.value));
    var CI = (principle.value*x);
    output.innerText = "Compound Interest is : " + CI ;
}
)

console.log(output)