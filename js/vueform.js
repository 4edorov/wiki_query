Vue.component('git-hub-ref', {
  template: `
    <div class="container-fluid header-line">
      <a href="https://github.com/4edorov/wiki_query"> View on Github <i class="fa fa-github fa-lg"></i></a>
      <a class="header-line-right" href="https://vuejs.org/"> Made with amazing Vue.js <i class="fa fa-hand-peace-o fa-lg"></i></a>
    </div>
  `
});
let gitHubRef = new Vue({
  el: '#gitHubRef'
});

Vue.component('wiki-search', {
  template: `
    <div>
      <div class="search-part">
        <input class="input-lg" id="search" v-model="search" v-on:keyup.enter="startSearch()" type="text" placeholder="Search..">
      </div>
      <div class="results-part" v-if="responseData">
      <h3>Results for search "{{ responseData[0] }}"</h3>
      <ul class="list-group">
        <li class="list-group-item thin" v-for="(item, index) in responseData[1]">
          <a :href="responseData[3][index]" target="blank">
            <div class="panel panel-info thin">
              <div class="panel-heading text-left thin"><p class="thin">{{ item }}</p></div>
              <div class="panel-body text-justify thin"><p class="thin">{{ responseData[2][index] }}</p></div>
            </div>  
          </a>
        </li>
      </ul>
    </div>
  `,
  data: function () {
    return {
      search: '',
      responseData: ''
    }
  },
  methods: {
    startSearch() {
      this.$http.get('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + this.search + '&limit=10&namespace=0&format=json&origin=*')
        .then(response => {
          if (response.ok) {
            this.responseData = response.body;
          }
          console.log(this.responseData);
        }, response => {
            this.alert('there was an error with this ajax request');
      });
    }
  }
});
let wikiSearch = new Vue({
  el: '#wikiSearch'
});

Vue.component('random-search', {
  template: `
    <div class="name-page">
      <div class="name-page">
        <h2>Wikipedia Search</h2>
      </div>
      <a class="name-page" target="blank" :href="randomWikiArticle">
        <button type="button" class="btn btn-info"><i class="fa fa-random"></i> Random Search</button>
      </a>  
    </div>
  `,
  computed: {
    randomWikiArticle() {
      return 'https://en.wikipedia.org/wiki/Special:Random'
    }
  }
});
let randomSearch = new Vue({
  el: '#randomSearch'
});