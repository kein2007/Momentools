const loginAll=document.querySelector("#login");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-box__input input");
const loginSubmit = document.querySelector("#loginbox__submit");
const greeting = document.querySelector("#greeting");
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const HIDDEN_CLASSNAME="hidden"
const USERNAME_KEY="username"

function onLSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginAll.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);    
    paintGreetings(username);
    }

function paintGreetings(username) {
    loginAll.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `${username}님 접속중.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    main.classList.remove(HIDDEN_CLASSNAME);
    footer.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    loginAll.classList.remove(HIDDEN_CLASSNAME); // 로그인 폼 보여주기
    main.classList.add(HIDDEN_CLASSNAME);
    footer.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLSubmit);
    loginSubmit.addEventListener("submit",onLSubmit);
} else {
    paintGreetings(saveUsername);
}

