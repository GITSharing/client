Vue.component('sidebar-component', {
    template: `
    <div class="col-lg-3 pl-0">
        <h3 class="my-4">Shop Name</h3>
        <div class="list-group">
        <a href="#" class="list-group-item" @click="filterGif('')">All</a>
            <a href="#" class="list-group-item" @click="filterGif('Funny')">Funny</a>
            <a href="#" class="list-group-item" @click="filterGif('Anime')">Anime</a>
        </div>
    </div>
    `,
    methods: {
        filterGif(categories) {
            this.$emit('categories-input', categories)
        }
    }
})