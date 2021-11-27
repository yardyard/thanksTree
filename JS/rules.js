// ----------- 변수 -----------
let sumHours = 10000
const hoursArr = [];

// ------- HTML id 연결 -----------
const rules = document.querySelector("#rules");
const rulesInput = rules.querySelector("#rulesInput");
const rulesBtn = rules.querySelector("#rulesBtn");
const rulesH2 = rules.querySelector("#lastHours");


// ----------- event function -----------

function onBtnClick(event) {
    // 웹사이트 기본 이벤트 방지
    event.preventDefault();
    
    // 입력 받은 값 저장
    const UserInput = rulesInput.value;
    
    // 입력창 초기화
    rulesInput.value = "";

    // 입력값 hoursArr에 저장
    hoursArr.push(UserInput);

    // hoursArr localStorage에 저장
    localStorage.setItem("HOURS", JSON.stringify(hoursArr));
    

}


// UserInput localStorage로부터 string에서 object로 가져옴.
const Hours = (JSON.parse(localStorage.getItem("HOURS")));

if(Hours !== null){

  // Hours의 각 인덱스를 sumHours에 map을 이용해 각각 빼준다.
  Hours.map((hour) => {sumHours = sumHours - hour});
  
  // 빼준 sumHours를 화면에 출력해준다.
  rulesH2.innerText = `${sumHours} 시간이 남았습니다.`;
  }
  else{
      rulesH2.innerText = `${sumHours} 시간이 남았습니다.`;
  }


// ----------- event listener -----------
rulesBtn.addEventListener("click", onBtnClick);


