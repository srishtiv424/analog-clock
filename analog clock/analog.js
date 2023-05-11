function displayTime(){
    d=new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation=30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;


    hour.style.transform=`rotate(${hrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;

}setInterval(displayTime,1000);