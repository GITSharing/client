
var app = new Vue({
    el:"#app",
    data : {
        gifMaster: [],
        gif: [],

    },
    created() {
        this.getGif()
    },
    methods: {
        getGif() {
            axios.get(`${server}/gif`)
            .then(({data}) => {
                this.gifMaster = data
                this.gif = data
            })
            .catch(({err}) => {
                console.log(err)
            })
        },
        filtered(input) {
            if (input) {
                this.gif = this.gifMaster.filter(gif => {
                    return gif.categories === input
                })
            } else {
                this.gif = this.gifMaster
            }
        }
    }
})