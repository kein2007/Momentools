// *대기화면시계* //
const sbClock = document.getElementById("standby__clock")

function getSBClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    sbClock.innerText=`${hours}:${minutes}:${seconds}`;
}
getSBClock();
setInterval(getSBClock, 1000);

// *대기화면 날자* //
const sbToDay = document.getElementById("standby__today")

function getSBDate() {
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
    sbToDay.innerText=`${year}년 ${month}월 ${day}일 ${dow}`;
}
getSBDate();

// *대기화면 배경* //
const sbScr = document.getElementById("standby-screen");
const sbBgImgs = ["img/wp(1).jpg",
"img/wp(2).jpg",
"img/wp(3).jpg",
"img/wp(4).jpg",
"img/wp(5).jpg",
"img/wp(6).jpg",
"img/wp(7).jpg",
"img/wp(8).jpg",
"img/wp(9).jpg",
"img/wp(10).jpg",
"img/wp(11).jpg",
"img/wp(12).jpg",
"img/wp(13).jpg",
"img/wp(14).jpg",
"img/wp(15).jpg",
"img/wp(16).jpg",
"img/wp(17).jpg",
"img/wp(18).jpg",
"img/wp(19).jpg",
"img/wp(20).jpg",
"img/wp(21).jpg",
"img/wp(22).jpg",
"img/wp(23).jpg",
"img/wp(24).jpg",
"img/wp(25).jpg",
"img/wp(26).jpg",
"img/wp(27).jpg",
"img/wp(28).jpg",
"img/wp(29).jpg",
"img/wp(30).jpg",
"img/wp(31).jpg",
"img/wp(1).webp",
"img/wp(2).webp",
];
const bgImgNum = Math.floor(Math.random()*sbBgImgs.length);
sbScr.style.backgroundImage =`url('${sbBgImgs[bgImgNum]}')`;

// *대기화면 호출* //
const STB = document.getElementById("standby");
const sbMain = document.querySelector("main");

function sbOn() {    
    STB.classList.remove('hidden');
    sbMain.classList.add('hidden');    
}

let timer;
// 입력이 있을 경우 타이머를 취소
function resetTimer() {
  clearTimeout(timer);
  startTimer();
}
// 5분 후에 대기화면 호출하는 타이머를 시작.
function startTimer() {
  timer = setTimeout(sbOn, 300 * 1000);
}
// 입력이 있을 경우 타이머를 재설정.
document.addEventListener('keydown', resetTimer);
document.addEventListener('mousedown', resetTimer);
// 페이지 로딩 시 타이머를 시작.
startTimer();

// *대기화면 해제* //
window.onload = function () {
    sbScr.style.cursor = "pointer";
    sbScr.onclick = sbOff;
}

function sbOff() {
    STB.classList.add('hidden');
    sbMain.classList.remove('hidden');    
}



