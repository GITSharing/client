Vue.component('show-slider-component', {
  props:['giftop3'] ,
  template :`

  <div id="carouselExampleIndicators" class="carousel slide my-4" style="height: 300px !important;" data-ride="carousel">
  <!-- SLIDING IMAGE -->
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active justify-content-center">
      <img class="d-block img-fluid mx-auto" :src="giftop3[0].gif_url" width="200" height="200" alt="First slide">
    </div>
    <div class="carousel-item justify-content-center">
      <img class="d-block img-fluid mx-auto" :src="giftop3[1].gif_url" width="200" height="200" alt="Second slide">
    </div>
    <div class="carousel-item justify-content-center">
      <img class="d-block img-fluid mx-auto" :src="giftop3[2].gif_url" width="200" height="200" alt="Third slide">
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
    methods: {
      detail(gif) {
        this.$emit('gif_modal', gif);
        $('#detail_modal').modal('show');
      }
    },
    template: `
    <div class="row">

    <div class="col-lg-4 col-md-6 mb-4" v-for="item in gif">
    <div class="card h-100">
            <a href="#" @click.prevent=detail(item)><img class="card-img-top" :src="item.gif_url" alt="gif"></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#" @click.prevent=detail(item)>{{item.title}}</a>
              </h4>
              </div>
            <div class="card-footer">
              <p class="card-text">{{item.categories}}</p>
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
    props:['gif', 'giftop3'],
    template: `
    <div class="col-lg-9">


        <show-slider-component :giftop3="giftop3"></show-slider-component>
        <show-all-component :gif="gif" @gif_modal="gif_modal"></show-all-component>

    </div>
    <!-- /.col-lg-9 -->`,
    methods: {
      gif_modal(gif_data) {
        this.$emit('gif_modal', gif_data)
      }
    }
})