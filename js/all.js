// 指定 dom元素
const body = document.body;
const addBtn = document.getElementById('btn-add');
const addBtn2 = document.getElementById('btn-add2');
const addBtn3 = document.getElementById('btn-add3');
const listCount = document.getElementById("listCount");
const listCount2 = document.getElementById("listCount2");
const listCount3 = document.getElementById("listCount3");
const addList = document.getElementById('add-list');
const addList2 = document.getElementById('add-list2');
const addList3 = document.getElementById('add-list3');
const todoList = document.getElementById('card-box');
const todoList2 = document.getElementById('card-box2');
const todoList3 = document.getElementById('card-box3');
let data = JSON.parse(localStorage.getItem('mainList')) || [];
let data2 = JSON.parse(localStorage.getItem('branchList')) || [];
let data3 = JSON.parse(localStorage.getItem('daily')) || [];
let aa = [];
//初始化頁面
window.onload = getdata();
function getdata(){
  updateData(data);
  updateData2(data2);
  updateData3(data3);
}
// 新增資料
function addData(e){
  let addValue = addList.value;
  //點擊 Enter 鍵或按鈕新增一筆資料
  if(e.keyCode === 13 || e.target.value === 'send'){
    if(addValue.trim() !== ''){
        let todoData = {
            id: Math.floor(Date.now()),
            content: addValue,
            completed:false,
        };
        data.push(todoData);
        aa.push(todoData.id);
    }
    updateData(data);
    localStorage.setItem('mainList',JSON.stringify(data));

    //清空input資料
    addList.value ="";
  }
}
function addData2(e){
  let addValue = addList2.value;
  //點擊 Enter 鍵或按鈕新增一筆資料
  if(e.keyCode === 13 || e.target.value === 'send'){
    if(addValue.trim() !== ''){
        let todoData = {
            id: Math.floor(Date.now()),
            content: addValue,
            completed:false,
        };
        data2.push(todoData);
        aa.push(todoData.id);
    }
    updateData2(data2);
    localStorage.setItem('branchList',JSON.stringify(data2));

    //清空input資料
    addList2.value ="";
  }
}
function addData3(e){
  let addValue = addList3.value;
  //點擊 Enter 鍵或按鈕新增一筆資料
  if(e.keyCode === 13 || e.target.value === 'send'){
    if(addValue.trim() !== ''){
        let todoData = {
            id: Math.floor(Date.now()),
            content: addValue,
            completed:false,
        };
        data3.push(todoData);
        aa.push(todoData.id);
    }
    updateData3(data3);
    localStorage.setItem('daily',JSON.stringify(data3));

    //清空input資料
    addList3.value ="";
  }
}
// 更新資料
function updateData(data){
  let str ='';
  data.forEach((item,key) => {
    str +=`
        <li class="list-item" id="${item.id}">
            <div class="inputBox">
                <input id="${item.id}" type="checkbox" ${item.completed ? "checked" : ""}
                data-action="complete" data-id="${item.id}">
                <label class="checklabel" for="${item.id}" data-action="complete" data-id="${item.id}">
                <span></span>
                ${item.content}
                </label>
            </div>
            <button class="btn-del fas fa-trash" data-index="${key}"></button>
        </li>`;
  })
  todoList.innerHTML = str;
  listCount.textContent = $('#card-box li').length;
  // DOM元素
  const delBtns = document.querySelectorAll('.btn-del');

  delBtns.forEach( btn =>{
    btn.addEventListener('click',delData);
  })
}
function updateData2(data2){
  let str ='';
  data2.forEach((item, key) => {
      str +=`
          <li class="list-item" id="${item.id}">
              <div class="inputBox">
                  <input id="${item.id}" type="checkbox" ${item.completed ? "checked" : ""}
                  data-action="complete" data-id="${item.id}">
                  <label class="checklabel" for="${item.id}" data-action="complete" data-id="${item.id}">
                  <span></span>
                  ${item.content}
                  </label>
              </div>
              <button class="btn-del2 fas fa-trash" data-index="${key}"></button>
          </li>`;
  })
  todoList2.innerHTML = str;
  listCount2.textContent = $('#card-box2 li').length;
  // DOM元素
  const delBtns = document.querySelectorAll('.btn-del2');

  delBtns.forEach( btn =>{
      btn.addEventListener('click',delData2);
  })
}
function updateData3(data3){
  let str ='';
  data3.forEach((item, key) => {
      str +=`
          <li class="list-item" id="${item.id}">
              <div class="inputBox">
                  <input id="${item.id}" type="checkbox" ${item.completed ? "checked" : ""}
                  data-action="complete" data-id="${item.id}">
                  <label class="checklabel" for="${item.id}" data-action="complete" data-id="${item.id}">
                  <span></span>
                  ${item.content}
                  </label>
              </div>
              <button class="btn-del3 fas fa-trash" data-index="${key}"></button>
          </li>`;
  })
  todoList3.innerHTML = str;
  listCount3.textContent = $('#card-box3 li').length;
  // DOM元素
  const delBtns = document.querySelectorAll('.btn-del3');

  delBtns.forEach( btn =>{
      btn.addEventListener('click',delData3);
  })
}
// 完成任務按鈕
function checkData(e) {
    if (e.target.dataset.action === "complete") {
		data.forEach((item) => {
			if (e.target.dataset.id == item.id) {
                item.completed = item.completed ? false : true;
            // console.log(item);            
            }
        })
    }
    updateData(data);
}
function checkData2(e) {
  if (e.target.dataset.action === "complete") {
  data2.forEach((item) => {
    if (e.target.dataset.id == item.id) {
              item.completed = item.completed ? false : true;
          // console.log(item);            
          }
      })
  }
  updateData2(data2);
}
function checkData3(e) {
  if (e.target.dataset.action === "complete") {
  data3.forEach((item) => {
    if (e.target.dataset.id == item.id) {
        item.completed = item.completed ? false : true;
        // console.log(item);            
      }
    })
  }
  updateData3(data3);
}

//刪除資料
function delData(e){
  console.log(aa);
  let indexStr = e.target.dataset.index;
  // console.log(e.path[1].id);
  data.splice(indexStr, 1);
  localStorage.setItem('mainList',JSON.stringify(data));
  updateData(data);
}
function delData2(e){
  let indexStr = e.target.dataset.index;
  // console.log(e.path[1].id);
  data2.splice(indexStr, 1);
  localStorage.setItem('branchList',JSON.stringify(data2));
  updateData2(data2);
}
function delData3(e){
  let indexStr = e.target.dataset.index;
  console.log(indexStr, e.path[1].id);
  data3.splice(indexStr, 1);
  localStorage.setItem('daily',JSON.stringify(data3));
  updateData3(data3);
}

//刪除全部資料
$('#delete-all').click(function(){
  localStorage.removeItem('mainList');
  data = [];
  updateData(data);
});
$('#delete-all2').click(function(){
  localStorage.removeItem('branchList');
  data2 = [];
  updateData2(data2);
});
$('#delete-all3').click(function(){
  localStorage.removeItem('daily');
  data3 = [];
  updateData3(data3);
});

// 監聽與更新 
body.addEventListener("keydown",addData);
addBtn.addEventListener('click',addData,true);
addBtn2.addEventListener('click',addData2,true);
addBtn3.addEventListener('click',addData3,true);
todoList.addEventListener('click',checkData);
todoList2.addEventListener('click',checkData2);
todoList3.addEventListener('click',checkData3);

// 拖曳功能
dragula([
  document.getElementById("card-box"),
  document.getElementById("card-box2"),
  document.getElementById("card-box3")
],{
  revertOnSpill: true
}).on('drop', function(e) {
  listCount.textContent = $('#card-box li').length;
  listCount2.textContent = $('#card-box2 li').length;
  listCount3.textContent = $('#card-box3 li').length;
});
