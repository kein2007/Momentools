// 시계
const clock = document.querySelector(".clock")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

// 날자
const toDay = document.querySelector(".today")

function getDate() {
    const date = new Date();
    const weekday = new Array(7);
        weekday[0] = "일요일";
        weekday[1] = "월요일";
        weekday[2] = "화요일";
        weekday[3] = "수요일";
        weekday[4] = "목요일";
        weekday[5] = "금요일";
        weekday[6] = "토요일";
    const year = String(date.getFullYear()).padStart(4,"0");
    const month = String(date.getMonth()+1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    const dow = weekday[date.getDay()];
    toDay.innerText=`${year}년 ${month}월 ${day}일 ${dow}`;
}
getDate();
