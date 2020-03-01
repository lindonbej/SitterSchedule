const app = new Vue({
    el: '#firstApp',
    methods: {
        onClick() {
            console.log("button press");
            window.location.href = 'home.html';
        }
    }
});