var nowTime = $('#current-time');
var timeDay = $('.timeStamp')[0].innerText;
var numberTime = $('.number');

console.log(numberTime)
console.log(timeDay)
console.log(nowTime)


var saving = $('.btn')
console.log(saving)

var dynaTime = setInterval(function(){
    var currentTime = moment();
    for (i = 0; i < currentTime.length; i++){
        if (timeDay[i].innerText < currentTime.format("hh")){
            timeDay.style.backgroundColor = "gray";
        } else if (timeDay[i].innerText == currentTime.format("hh")){
            timeDay.style.backgroundColor = "red";
        } else {
            timeDay.style.backgroundColor = "green";
        }}
    nowTime.text("the current time is " +currentTime.format("hh:mm:ss") + " on " + currentTime.format("MM-DD-YYYY"))

}, 1000) 

///saving items
var inputField = $('.col-8')
var myInput  = $('.myInput')
console.log(inputField)
console.log(myInput)


localStorage.getItem('task')


saving.on("click", function(event) {
    event.stopPropagation();
    for(i = 0; i < 8; i++)
    {  newInput = inputField[i].value;
    console.log(inputField[i].value)
    event.stopPropagation();
    localStorage.setItem("task", JSON.stringify(newInput));
    
}
    
  })


  function renderMessage() {
    var taskInput = JSON.parse(localStorage.getItem("task"));
    for(i = 0; i < 8; i++)
    if (taskInput !== null) {
      inputField[0].value = taskInput;
    }
  }