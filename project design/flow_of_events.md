# Event flow for precedent "Add new task"
## Main flow:
1. Use case begins when user inputs description of task into text field. 
2. Further user clicks button "Add" to add new task. If error occurs error flow A1 executed.
3. Then new task is added to the list.
4. Use case ends.
## E1 flow:
1. E1 flow begins.
2. User gets error, that text field is empty.
3. E1 flow ends.

# Event flow for precedent "Delete task"
## Main flow:
1. Use case begins when user clicks icon close of any task. 
2. Task is deleted from the list.
3. Use case ends.

# Event flow for precedent "Edit task"
## Main flow:
1. Use case begins when user clicks icon settings of any task. 
2. User changes description of task. If error occurs error flow A1 executed.
3. Task was edited.
4. Use case ends.
## E1 flow:
1. E1 flow begins.
2. User gets error page with description of error.
3. E1 flow ends.

# Event flow for precedent "Mark task"
## Main flow:
1. Use case begins when user clicks checkbox of any task. 
2. Task is marked as completed.
3. Task style is changed.
4. Use case ends.
