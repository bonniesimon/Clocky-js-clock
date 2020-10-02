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
//clock()
setInterval(clock,1000);

function anclock(){
    const date =new Date();
    let hour = date.getHours();
    let minute =date.getMinutes();
    let second = date.getSeconds();

    var hands = [
        {
          hand: 'hours',
          angle: (hour * 30) + (minute / 2)
        },
        {
          hand: 'minutes',
          angle: (minute * 6)
        },
        {
          hand: 'seconds',
          angle: (second * 6)
        }
      ];
      for (var j = 0; j < hands.length; j++) {
        var elements = document.querySelectorAll('.' + hands[j].hand);
        elements.forEach((x)=>{
            x.style.transform = 'rotateZ('+ hands[j].angle +'deg)';
            if(hands[j].hand=='minutes'){
                x.parentNode.setAttribute('data-second-angle',hands[j+1].angle);
            }
        })
      }
}
anclock()