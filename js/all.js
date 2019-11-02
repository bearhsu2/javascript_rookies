var app = new Vue({

    el: "#app",
    data: {
        todoList: [],
        newTodo: ''
    },
    methods: {
        addTodo(newTodo) {
            this.todoList.push({
                content: newTodo,
                finished: false
            });
        },
        removeTodo(todo){
            this.todoList.splice(this.todoList.indexOf(todo), 1);
        }
    }

});