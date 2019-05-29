console.log("hello world!");
/*Date() object used to get current date 
let date = new Date();
getting time
const hour = date.getHours();
const minute =date.getMinutes();
const second = date.getSeconds();
*/

// console.log(minute);
/*Inserting info from date to HTML
document.getElementById('hour').innerHTML = hour+" :";
document.getElementById('minute').innerHTML = minute+" :";
document.getElementById('second').innerHTML = second;
*/

//The time in the DOM only updates if we manually refresh so we need to use the setInterval function

/*
The below code demonstrates the use of setInterval function
The code calls the function hello every 1000ms
function hello(){
    console.log('Hello');
}
    
setInterval (hello,1000);
*/

function clock(){
    const date =new Date();
    let hour = date.getHours();
    let minute =date.getMinutes();
    let second = date.getSeconds();

    if (hour < 10){
        hour ='0'+hour;
    }
    if (minute < 10){
        minute = '0'+minute;
    }
    if (second < 10){
        second ='0'+second;
    }


    document.getElementById('hour').innerHTML = hour+" :";
    document.getElementById('minute').innerHTML = minute+" :";
    document.getElementById('second').innerHTML = second;
}

setInterval(clock,1000);