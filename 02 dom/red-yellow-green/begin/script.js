/* 🚀🔥
黃綠紅 你要哪一個？

此專案涵蓋的概念
- DOM 操作
- 事件監聽器
- 迴圈 forEach 
- 變數
- 條件語句 (if else if)
- 樣板字面值
*/


// 將 title 文字改成 '報告阿柴，標題已經切換！' 並將字體顏色改成藍色
function changeTitle(){
  let titleDiv = document.getElementById('title');
  console.log("title:", titleDiv);
  let message = 'Hi there, the title is changed!';
  titleDiv.innerText = message;
  titleDiv.innerHTML =`<p>${message}</p>`;
  titleDiv.style.color = 'blue';
}


document.addEventListener("DOMContentLoaded", function () {
  const squares = document.querySelectorAll('.colorSquare');
  const output = document.getElementById('output');

  squares.forEach(square => {
    square.addEventListener('click', () => {
      _id = square.getAttribute('id');
      const chosenColor = square.value;
      //document.body.style.Color = chosenColor;
      //output.innerHTML = `You chosen <strong>${chosenColor}</strong>`;
      output.innerHTML = `<div class = 'colorSquare' id="${_id}"></div>`
    });
  });
});
;


function resetScore() {

}

const resetGameBtn = document.getElementById('reset')
// 綁定 reset 事件
resetGameBtn.onclick = () => resetScore()

