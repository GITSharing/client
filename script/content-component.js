
Vue.component('show-slider-component', {
  props:['gif'] ,
  template :`
  
  <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
  <!-- SLIDING IMAGE -->
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active justify-content-center">
      <img class="d-block img-fluid" :src="gif[0].gif_url" width="200" height="200" alt="First slide">
    </div>
    <div class="carousel-item justify-content-center">
      <img class="d-block img-fluid" :src="gif[1].gif_url" width="200" height="200" alt="Second slide">
    </div>
    <div class="carousel-item justify-content-center">
      <img class="d-block img-fluid" :src="gif[2].gif_url" width="200" height="200" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<!-- /SLIDING IMAGE -->
  `
})

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

        <show-slider-component :gif="gif"></show-slider-component>
        <show-all-component :gif="gif"></show-all-component>

    </div>
    <!-- /.col-lg-9 -->`
})