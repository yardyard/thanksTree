// ----------- 변수 -----------
let HoursArr = [];
// ------- HTML id 연결 -----------
const rules = document.querySelector("#rules");
const rulesInput = rules.querySelector("#rulesInput");
const rulesBtn = rules.querySelector("#rulesBtn");
const rulesH2 = rules.querySelector("#input");


// ----------- event function -----------

function onBtnClick(event) {
    // 웹사이트 기본 이벤트 방지
    event.preventDefault();
    // 입력 받은 값 저장
    const UserInput = rulesInput.value;
    // 입력값 HoursArr에 저장
    HoursArr.push(UserInput);
    // HoursArr localStorage에 저장
    localStorage.setItem("HOURS",JSON.stringify(HoursArr));
    paintRules()
}

function paintRules() {
    // UserInput localStorage로부터 가져옴.
    const Hours = localStorage.getItem("HOURS", parseInt(HoursArr));
    console.log(Hours);
    // 
    rulesH2.innerText = viewHours;
}


// ----------- event listener -----------
rulesBtn.addEventListener("click", onBtnClick);


