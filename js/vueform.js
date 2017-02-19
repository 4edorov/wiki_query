Vue.component('git-hub-ref', {
  template: `
    <div class="container-fluid">
      <a href="https://github.com/4edorov/wiki_query"> View on Github <i class="fa fa-github fa-lg"> </i></a>
    </div>
  `
});
let gitHubRef = new Vue({
  el: '#gitHubRef'
});

Vue.component('wiki-search', {
  template: `
    <div>
      <div class="container">
        <div id="wrap">
          <input id="search" v-model="search" v-on:keyup.enter="startSearch()" type="text" placeholder="What're we looking for?">
          <input id="search_submit" type="submit">
        </div>
      </div>
      <div v-if="responseData">
      <h3>Results for search "{{ responseData[0] }}"</h3>
      <ul>
        <li v-for="item in responseData[1]">
          <p>{{ item }}</p>
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
    <div class="container">
      <div class="container">
        <h2>Wikipedia Search</h2>
      </div>
      <a :href="randomWikiArticle">
        <button type="button" class="btn btn-default"><i class="fa fa-random"></i> Random Search</button>
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