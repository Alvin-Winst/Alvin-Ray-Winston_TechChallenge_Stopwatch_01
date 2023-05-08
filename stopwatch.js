var start = document.getElementById("start");
var pause = document.getElementById("pause");
var reset = document.getElementById("reset");
var flag = document.getElementById("flag");

var flags = document.getElementById("flags");

var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var milisec = document.getElementById("milisec");

var hr = 0, min = 0, sec = 0, msec = 0;

var timer = false;

start.addEventListener("click",function(){
    timer = true;
    start.disabled = true;
    start.style.backgroundColor = "grey";
    stopwatch();
});

pause.addEventListener("click",function(){
    timer = false;
    start.disabled = false;
    start.style.backgroundColor = "green";
});

reset.addEventListener("click",function(){
    timer = false;
    hr = 0, min = 0, sec = 0, msec = 0;
    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";
    milisec.innerHTML = "00";
    while (flags.hasChildNodes()) {
        flags.removeChild(flags.firstChild);
    }
    start.disabled = false;
    start.style.backgroundColor = "green";
});

flag.addEventListener("click",function(){
    var hr_Str = hr, min_Str = min,
    sec_Str = sec, msec_Str = msec;
    if (msec<10) {
        msec_Str = "0" + msec_Str;
    }
    if (sec<10) {
        sec_Str = "0" + sec_Str;
    }
    if (min<10) {
        min_Str = "0" + min_Str;
    }
    if (hr<10) {
        hr_Str = "0" + hr_Str;
    }
    var timeflag = hr_Str + " : " + min_Str +
    " : " + sec_Str + " : " + msec_Str;
    var timeflagNode = document.createTextNode(timeflag);
    var timeflagH1 = document.createElement("h1");
    timeflagH1.setAttribute("class","flagList");
    timeflagH1.appendChild(timeflagNode);
    flags.appendChild(timeflagH1);
});

function stopwatch(){
    if (timer) {
        msec++;

        if(msec==100){
            sec++;
            msec = 0;
        }
        if(sec==60){
            min++;
            sec = 0;
        }
        if (min==60) {
            hr++;
            min = 0;
        }

        var hr_Str = hr, min_Str = min,
        sec_Str = sec, msec_Str = msec;
        if (msec<10) {
            msec_Str = "0" + msec_Str;
        }
        if (sec<10) {
            sec_Str = "0" + sec_Str;
        }
        if (min<10) {
            min_Str = "0" + min_Str;
        }
        if (hr<10) {
            hr_Str = "0" + hr_Str;
        }
        hour.innerHTML = hr_Str;
        minute.innerHTML = min_Str;
        second.innerHTML = sec_Str;
        milisec.innerHTML = msec_Str;
        // setelah membandingkan dengan stopwatch di hp
        setTimeout(stopwatch,9);
    }
}