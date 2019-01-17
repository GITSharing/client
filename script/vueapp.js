
var app = new Vue({
    el:"#app",
    data : {
        gif: [],

    },
    created() {
        this.getGif()
    },
    methods: {
        getGif() {
            axios.get(`${server}/gif`)
            .then(({data}) => {
                this.gif = data
            })
            .catch(({err}) => {
                console.log(err)
            })
        }
    }
})