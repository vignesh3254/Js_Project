

let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('sec');

function UpdateTime() {
    const currentYear = new Date().getFullYear();
    const newYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
    const currentDate = new Date()
    let a = newYear - currentDate;

    const day = Math.floor(a / 1000 / 60 / 60 / 24);
    const hour = Math.floor((a / 1000 / 60 / 60) % 24);
    const min = Math.floor((a / 1000 / 60) % 60);
    const sec = Math.floor((a / 1000) % 60);

    days.innerText = day < 10 ? "0" + day : day;
    hours.innerText = hour < 10 ? "0" + hour : hour;
    minutes.innerText = min < 10 ? "0" + min : min;
    seconds.innerText = sec < 10 ? "0" + sec : sec;
}
setInterval(UpdateTime, 1000)
