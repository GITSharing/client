
Vue.component('show-all-component', {
    data() {
        return {

        }
    },
    props:['gif'],
    template: `
    <div class="row">

    <div class="col-lg-4 col-md-6 mb-4" v-for="item in gif">
    <div class="card h-100">
            <a href="#"><img class="card-img-top" :src="item.gif_url" alt="gif"></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">{{item.title}}</a>
              </h4>
              </div>
            <div class="card-footer">
              <p class="card-text">{{item.categories}}</p>
              <small class="text-muted"><img src="https://img.icons8.com/metro/50/000000/thumb-up.png"> {{item.like}}</small>
              <div class="fb-share-button" 
              :data-href="item.gif_url" 
              data-layout="button_count">
            </div>
            </div>
          </div>
        </div>

      </div>
      <!-- /.row -->
    `
})



Vue.component('content-component', {
    data () {
        return {

        }
    },
    props:['gif'],
    template: `
    <div class="col-lg-9">

        <show-all-component :gif="gif"></show-all-component>

    </div>
    <!-- /.col-lg-9 -->`
})