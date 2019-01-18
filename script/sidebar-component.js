Vue.component('sidebar-component', {
    template: `
    <div class="col-lg-3 pl-0">
        <h3 class="my-4">Categories</h3>
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a @click="filterGif('')" class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">All</a>
            <a @click="filterGif('Funny')" class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Funny</a>
            <a @click="filterGif('Anime')" class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Anime</a>
        </div>
    </div>
    `,
    methods: {
        filterGif(categories) {
            this.$emit('categories-input', categories)
        }
    }
})