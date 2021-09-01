var output = document.querySelector("#output");
var principle = document.querySelector("#principle");
var rate = document.querySelector("#rate");
var time = document.querySelector("#time");


document.addEventListener('click',function calculate (){
    var SI = (principle.value*rate.value*time.value)/100;
    output.innerText = "Simple Intrest is: " + SI ;
}
)

console.log(output)