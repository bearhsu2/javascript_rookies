var app = new Vue({

    el: "#app",
    data: {
        todoList: [],
        newTodo: '',
        filter: 'all'
    },
    methods: {
        addTodo(newTodo) {
            this.todoList.push({
                content: newTodo,
                finished: false
            });
        },
        removeTodo(todo) {
            this.todoList.splice(this.todoList.indexOf(todo), 1);
        }
    },
    computed: {
        filteredTodoList: function () {

            switch (this.filter) {
                case 'finished':
                    return this.todoList.filter(
                        function (todo) {
                            return todo.finished === true;
                        }
                    );
                case 'unfinished':
                    return this.todoList.filter(
                        function (todo) {
                            return todo.finished === false;
                        }
                    );
                default:
                    return this.todoList;

            }
        }

    }

});