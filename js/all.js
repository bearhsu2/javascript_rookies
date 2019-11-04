var apiUrlPrefix = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';
var app = new Vue({

    el: "#app",
    data: {
        branches: ['master', 'dev'],
        currentBranch: 'master',
        commits: null
    },
    created: function () {
        this.fetchData()
    },
    watch: {
        currentBranch: function () {
            this.fetchData();
        }
    },
    methods: {
        fetchData: function () {
            const xhr = new XMLHttpRequest();
            const vm = this;

            xhr.open('GET', apiUrlPrefix + vm.currentBranch);
            xhr.onload = function(){
                vm.commits = JSON.parse(xhr.responseText);
                console.log(vm.commits);

            };
            xhr.send();


            // alert(apiUrlPrefix);
        }
    },
    computed: {}

});