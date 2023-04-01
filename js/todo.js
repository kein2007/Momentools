const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// Submit 처리
function handleToDoSubmit(event) {
    event.preventDefault(); 
    const newTodo=toDoInput.value; 
    toDoInput.value = "";  
    const newTodoObj = {
        Contents:newTodo,
        Check:false,        
        Id:Date.now(), 
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); 
    saveToDos();
}

// 체크여부 저장
function checkToDo(e){    
    const toDoID = e.target.parentElement.id; 
    toDos.map((todo) => {
        if(todo.Id == toDoID) {
            todo.Check == false ? todo.Check = true : todo.Check = false;
        }
    });    
    saveToDos();    
}

// 체크 저장 건 취소선 처리
function updateToDoUI(todo) {
    const li = document.getElementById(todo.Id);
    const span = li.querySelector('span');
    if (todo.Check === true) {
      span.classList.add('checked');
    } else {
      span.classList.remove('checked');
    }
  }
  
  function checkToDo(e){    
    const toDoID = e.target.parentElement.id; 
    toDos.forEach((todo) => {
      if(todo.Id == toDoID) {
        todo.Check = !todo.Check;
        updateToDoUI(todo);
      }
    });    
    saveToDos();    
  }

// 삭제건을 제외한 내용 저장
function delToDo(event) {
    const li = event.target.parentElement;    
    li.remove();
    toDos = toDos.filter((toDo) => toDo.Id !== parseInt(li.id)); //지울 id와 비교하여 같지  않은 것만 저장//
    saveToDos();
}

// 새로운 To Do 작성 및 화면 갱신
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.Id;
    const span = document.createElement("span");
    const checkBtn = document.createElement("input");
    checkBtn.setAttribute('type', 'checkbox');    
    checkBtn.setAttribute('id', 'check');
    if (newTodo.Check === true) {
        span.classList.add('checked');
        checkBtn.checked=true;
      } else {
        span.classList.remove('checked');
        checkBtn.checked=false;
      }
    const delBtn = document.createElement("button");
    span.innerText=newTodo.Contents;
    delBtn.classList.add("fa-regular", "fa-trash-can");    
    checkBtn.addEventListener("change", checkToDo);
    delBtn.addEventListener("click", delToDo);      
    li.appendChild(span);
    li.appendChild(checkBtn); 
    li.appendChild(delBtn);       
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 저장된 배열 불러오기
const loadToDos = localStorage.getItem(TODOS_KEY);
if (loadToDos !== null) {
    const parsedToDos = JSON.parse(loadToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

