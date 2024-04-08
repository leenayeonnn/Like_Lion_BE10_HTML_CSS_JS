function addList(data) {
    list = document.getElementById("todo-list");

    const element = document.createElement("li");
    setClass(element, data);

    const button = document.createElement("button");
    button.setAttribute("class", "delete");
    button.innerText = "x";

    const span = document.createElement("span");
    const text = document.createTextNode(data.title);

    span.appendChild(text);
    element.appendChild(span);
    element.appendChild(button);
    list.appendChild(element);
}

id = 3;
function addTodoData() {
    const input = document.getElementById("input");
    const text = input.value;

    const data = { id: id++, title: text, done: false };
    basicDatas.push(data);

    addList(data);

    input.value = "";
    console.log(basicDatas);
}

function setClass(element, data) {
    if (data.done === true) {
        element.setAttribute("class", "done");
    } else {
        element.setAttribute("class", "in-progress");
    }
}

/////////////////////////////////

// 리스트 초기화
let basicDatas = [
    { id: 1, title: "Todo 1", done: false },
    { id: 2, title: "Todo 2", done: true },
];

for (data of basicDatas) {
    addList(data);
}

// 리스트 추가
document.getElementById("add").addEventListener("click", addTodoData);

document.getElementById("input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTodoData();
    }
});

// done 변경
document.getElementById("todo-list").addEventListener("click", (event) => {
    const target = event.target;
    const text = target.innerText;

    for (data of basicDatas) {
        if (data.title === text) {
            data.done = !data.done;

            setClass(target.parentNode, data);

            break;
        }
    }
    console.log(basicDatas);
});

// list 삭제
document.getElementById("todo-list").addEventListener("click", (event) => {
    const target = event.target;
    if (target.className === "delete") {
        const li = target.parentNode;
        const text = li.innerText.slice(0, li.innerText.length - 1);

        li.remove();

        const idx = basicDatas.findIndex((data) => data.title === text);
        basicDatas.splice(idx, 1);
        console.log(basicDatas);
    }
    console.log(basicDatas);
});
