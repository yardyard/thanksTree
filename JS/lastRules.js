// ----------- 변수 -----------


// ------- HTML id 연결 -----------
const lastRules = document.querySelector("#lastRules");

// ------- HTML 생성 -----------
const li = document.createElement("li");
const span = document.createElement("span");
li.appendChild(span);
lastRules.appendChild(li);

// UserInput localStorage로부터 string에서 object로 가져옴.
const hours = (JSON.parse(localStorage.getItem("HOURS")));

// 가져온 값이 null 값이 아니면 출력해줌.
if(hours !== null){
    hours.map((hour) => span.innerText = `${hour}시간`);
}
