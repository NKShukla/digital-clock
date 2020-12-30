const hr_span= document.getElementById("hr");
const min_span= document.getElementById("min");
const sec_span= document.getElementById("sec");

function clock() {
  const currDate = new Date();
  var hr = currDate.getHours();
  var min = currDate.getMinutes();
  var sec = currDate.getSeconds();

  if(hr < 10){
    hr = "0" + hr;
  }

  if(min < 10){
    min = "0" + min;
  }

  if(sec < 10){
    sec = "0" + sec;
  }

  hr_span.innerHTML = hr;
  min_span.innerHTML = min;
  sec_span.innerHTML = sec;
}

clock();
setInterval(clock, 1000);
