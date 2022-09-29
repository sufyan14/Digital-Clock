function showTime() {
    var date = new Date(); //date object of Date method which gives you current system date
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var session = "AM"; 

    if(h==0){
        h = 12; //12 hour format
    }

    if(h > 12){
        h = h - 12; //12 hour format
        session = "PM"
    }
    // for double digit

    h = (h<10)? "0"+h:h; //if h < 10 then print 0 as prefix else just hour
    m = (m<10)? "0"+m:m; //if m < 10 then print 0 as prefix else just min
    s = (s<10)? "0"+s:s; //if s < 10 then print 0 as prefix else just sec

    document.getElementById("DigitalClock").innerHTML =
      h + ":" + m + ":" + s + " " + session;
 
      setTimeout(showTime,1000) //allow you till how much time it has to run
    }
  showTime();