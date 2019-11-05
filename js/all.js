var app = new Vue({

    el: "#app",
    data: {
        inputText: '# hello'
    },
    methods: {
        update: _.debounce(function (e) {
            this.inputText = e.target.value;
        }, 300),

    },
    computed: {
        markedText: function () {
            return marked(this.inputText);
        }
    }

});