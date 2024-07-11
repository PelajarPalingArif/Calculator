let allButton = document.querySelectorAll("button");
allButton.forEach((ele) => {
  ele.onclick = function (e) {
    ele.style.transform = "translate(2px,2px)";
    setTimeout(() => {
      ele.style.transform = "translate(0px,0px)";
    }, 100);
  };
});
var storeNumber = 0;
var operation = 0;
var mathSymbol = "";
var numButton = document.querySelectorAll(".num");
var opeButton = document.querySelectorAll(".math-ope");
var equButton = document.querySelector("#equButton");
var negateButton = document.querySelector("#negButton");
var resButton = document.querySelector("#resButton");
var calcDisplay = document.querySelector("#displaySpan");
var expressionDisplay = document.querySelector("#expresDisplay");

let resetFlag = false;
resButton.onclick = function (e) {
  mathSymbol = "";
  operation = 0;
  storeNumber = 0;
  calcDisplay.textContent = "0";
  expressionDisplay.textContent = "";
  resetFlag = false;
}
negateButton.onclick = function (e) {
  let targetNum = parseFloat(calcDisplay.textContent);
  if(targetNum == 0)return;
  if(targetNum < 0){
    targetNum = Math.abs(targetNum);
  }
  else {
    targetNum = targetNum * -1;
  }
  calcDisplay.textContent = targetNum;
}
equButton.onclick = function (e) {
  if(operation == 0) return;
  let res = 0;
  switch (operation) {
    case 1:res = storeNumber + parseFloat(calcDisplay.textContent);break;
    case 2:res = storeNumber - parseFloat(calcDisplay.textContent);break;
    case 3:res = storeNumber * parseFloat(calcDisplay.textContent);break;
    case 4:res = storeNumber / parseFloat(calcDisplay.textContent);break;
    case 5:res = storeNumber % parseFloat(calcDisplay.textContent);break;
  
    default:
      break;
  }

  expressionDisplay.textContent = storeNumber + " " + mathSymbol + " " + calcDisplay.textContent;
  calcDisplay.textContent = res;
  resetFlag = true;
  operation = 0;

};
numButton.forEach((ele) => {
  ele.onclick = function (e) {
    if(resetFlag){
      resetFlag = false;
      calcDisplay.textContent = "0";
    }
    if(calcDisplay.textContent.indexOf('.') != -1 && ele.textContent == '.'){
      return;
    }
    if(calcDisplay.textContent == "0"){
      console.log("2")
      calcDisplay.textContent = ele.textContent;
    }
    else{
      console.log("3")
      calcDisplay.textContent += ele.textContent;
    }
  };
});

opeButton.forEach((ele) => {
  ele.onclick = function (e) {
    switch (ele.textContent) {
      case '+':operation = 1;mathSymbol="+";break;
      case '-':operation = 2;mathSymbol="-";break;
      case '⁎':operation = 3;mathSymbol="*";break;
      case '÷':operation = 4;mathSymbol="÷";break;
      case '%':operation = 5;mathSymbol="%";break;
      default:
        break;
    }
    resetFlag = true;
    storeNumber = parseFloat(calcDisplay.textContent);
    expressionDisplay.textContent = storeNumber + " " + ele.textContent;

  };
});
