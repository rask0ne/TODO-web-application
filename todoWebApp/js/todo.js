window.onload = function () {

  var todoList = [];

  if(localStorage.getItem('todo') != undefined) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    show();
  }

  var idTask = todoList.length;

  document.getElementById('addButton').onclick = function () {
    var d  = document.getElementById('myInput').value;
    //{todo: buy hleb; check: false}
    var temp = {};
    temp.todo = d;
    temp.check = false;
    temp.id = idTask;


    todoList[idTask] = temp;
    idTask = idTask + 1;
    console.log(todoList);
    show();
    localStorage.setItem( 'todo', JSON.stringify(todoList) );
  }

  function show() {
    var output='<ul id="myUl">'+'<br>';
    for (var key in todoList) {
      if(todoList[key].check == true) {
          output +='<li class="checked">';
      }
      else {
          output +='<li>';
      }
      output += todoList[key].todo +'</li>' +'<br>';
    }
    document.getElementById('todos').innerHTML = output+'</ul>';

  }

  // function check() {
  //           //alert(this.checked);
  //       var str = this.id;
  //       var id = str.substring(8);
  //       var elem = document.getElementsByClassName('Task'+id);
  //       var el = elem[0];
  //       el.parentNode.removeChild(el);
  //       for (var key in todoList) {
  //          if (id == todoList[key].id)
  //              {
  //                  todoList[key].check = true;
  //                  break;
  //              }
  //       }
  //       localStorage.setItem('todo', JSON.stringify(todoList));
  // }

}
