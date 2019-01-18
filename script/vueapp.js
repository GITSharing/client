var app = new Vue({
    el:"#app",
    data : {
        gifMaster: [],
        gif: [],
        giftop3: [],
    },
    created() {
        this.getGif()
        this.getTop3()
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
        },
        getTop3(){
            axios.get(`${server}/gif/top3`)
            .then(({data}) => {
                this.giftop3 =data
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
})