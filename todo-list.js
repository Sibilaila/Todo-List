
const todoList=[{
  name:'make dinner',
  duedate:'2022-12-22'
},{
  name:'wash dishes',
  duedate:'2022-12-22'
}
];

rendertodoList();

//render= display something on page
function rendertodoList(){
let todoListHTML='';

for(let i=0;i<todoList.length;i++){
const todoObject=todoList[i];
/*
const name=todoObject.name;
const duedate=todoObject.duedate
*/
const{name,duedate}=todoObject;
const html=`
<div>${name}</div>
<div>${duedate}</div>
 <button onclick="todoList.splice(${i},1);
 rendertodoList();
 " class="delete-input">Delete</button> 
`;
todoListHTML+=html;
}


document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}

function addTodo(){
  const input=document.querySelector('.js-input');
  //.value is used to get the input from the text box and display it
  const name=input.value;
  const dateInput=document.querySelector('.date-input');
  const duedate= dateInput.value;

  todoList.push({
    // name:name,
    // duedate:duedate
    name,duedate
  }
  );
  input.value='';
  rendertodoList();
 
}