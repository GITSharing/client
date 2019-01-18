var app = new Vue({
    el:"#app",
    data : {
        gifMaster: [],
        gif: [],
        giftop3: [],
        gif_one: {}
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
        gif_modal(gif_data) {
            this.gif_one = gif_data;
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2";
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
              
              window.fbAsyncInit = function(){  // this gets triggered when FB object gets initialized
                console.log("FB Object initiated");
                FB.XFBML.parse(); // now we can safely call parse method
              };
        }
    }
})