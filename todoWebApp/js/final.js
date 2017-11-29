window.onload = function () {

      //Get all tasks
      function get_todos() {
      var todos = new Array;
      var todos_str = localStorage.getItem('todo');
      if (todos_str !== null) {
          todos = JSON.parse(todos_str);
      }
      return todos;
    }

    //Add task function
    function add() {
      var task = document.getElementById('myInput').value;

      if(task=='') {
        alert("GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");
        return false;
      }

      var todos = get_todos();
      todos.push(task);
      localStorage.setItem('todo', JSON.stringify(todos));

      show();

      return false;
    }

    //Remove task function
    function remove() {
      var id = this.getAttribute('id');
      var todos = get_todos();
      todos.splice(id, 1);
      localStorage.setItem('todo', JSON.stringify(todos));

      show();

      return false;
    }

    //Show all tasks function
    function show() {
      var todos = get_todos();

      var html = '<ul>';
      for(var i=0; i<todos.length; i++) {
          html += '<li>' + todos[i] + '<span class="close" id="' + i  + '">\u00D7</span></li>';
      };
      html += '</ul>';

      document.getElementById('todos').innerHTML = html;

      var closeButtons = document.getElementsByClassName('close');
      for (var i=0; i < closeButtons.length; i++) {
          closeButtons[i].addEventListener('click', remove);
      };


      var list = document.querySelector('ul');
      list.addEventListener('click', function(ev) {
          if (ev.target.tagName === 'LI') {
              ev.target.classList.toggle('checked');
          }
      }, false);

    }

    document.getElementById('addButton').addEventListener('click', add);
    show();
}
