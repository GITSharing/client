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
                            <input type="file" name="avatar" @change="onFileChange">
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
            gif: ''
        }
    },
    methods: {
        postGif() {

            let formData = new FormData();
            formData.append('gif', this.gif);
            formData.append('title', this.gifTitle);
            formData.append('categories', this.gifCategories);

            axios.post(`${server}/gif`, formData,  {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(({ data }) => {
                    this.gifTitle = '';
                    this.gifCategories = '';
                    this.gif = '';
                    $('#modalLoginForm').modal('hide');
                    swal("Success", "Successfully Upload GIF", "success");
                    this.$emit('success-add')
                })
                .catch(error => {
                    swal("Error", "Failed to upload GIF", "error")
                })
        },
        onFileChange(event) {
            this.gif = event.target.files[0];
        }
    }
})