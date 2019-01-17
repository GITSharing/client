Vue.component('upload-component', {
    template: `
    <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Post New Gif</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form method="POST" v-on:submit.prevent="postGif()">
                    <div class="modal-body">
                        <div class="form-group">
                            <label class="col-form-label">Title:</label>
                            <input id="gif-title" type="text" class="form-control" placeholder="Title" v-model="gifTitle">
                        </div>
                        <div class="form-group">
                            <label class="col-form-label">Categories:</label>
                            <input id="gif-categories" type="text" class="form-control" placeholder="Categories" v-model="gifCategories">
                        </div>
                        <div class="form-group">
                            <label class="col-form-label">Image:</label>
                            <input type="file" @change="onFileChange">
                        </div>
                    </div>
                <div class="modal-footer">
                    <button id="submit-gif" type="submit" class="btn btn-primary">Submit</button>
                </div>
                </form>
            </div>
        </div>
  </div>
    `,
    data: function() {
        return {
            gifTitle: '',
            gifCategories: '',
            image: {}
        }
    },
    methods: {
        postGif() {

        },
        onFileChange(event) {
            this.image = event.target.files[0];
          },
    }
})