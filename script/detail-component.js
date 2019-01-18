Vue.component('detail-component', {
    template: `
    <div class="modal fade" id="detail_modal" tabindex="-1" role="dialog" aria-labelledby="detailLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ gif_detail.title }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <img class="card-img-top" :src="gif_detail.gif_url" alt="gif">
                <div class="card-footer">
                  <p class="card-text">{{gif_detail.categories}}</p>
                  <small class="text-muted"><a href="" @click.prevent=like(gif_detail._id)><img src="../vendor/thumbs.png"> {{gif_detail.like}} </a></small>
                  <div class="fb-share-button float-right" 
                  :data-href="gif_detail.gif_url" 
                  data-layout="button_count">
                </div>
                </div>
              </div>
                </div>
            </div>
        </div>
  </div>
    `,
    data: function() {
        return {
            
        }
    },
    props: ['gif_detail'],
    methods: {
        like(id) {
            console.log(id);
            axios.put(`${server}/gif/${id}/like`)
                .then(response => {
                    this.gif_detail.like++;
                    swal("Thanks", "", "success")
                })
                .catch(error => {
                    swal("Error", "", "error")
                })
        }
    }
})