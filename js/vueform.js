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
        <h2>Wikipedia Search</h2>
      </div>
      <div class="container">
        <div id="wrap">
          <form action="" autocomplete="on">
            <input id="search" v-model="search" v-on:keyup.enter="onEnter" type="text" placeholder="What're we looking for?">
            <input id="search_submit" value="" type="submit">
          </form>
        </div>
      </div>
    </div>
  `,
});
let wikiSearch = new Vue({
  el: '#wikiSearch',
  /*props: ['search'],*/
  data: {
    search: ''
  },
  methods: {
    onEnter: function() {
      this.$http.get('https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json', {
        headers: {
          'Api-User-Agent': 'Example/1.0'
        }
      }).then(response => {
        this.resData = response.body
      }, response => {

      });
    }
  }
});

Vue.component('random-search', {
  template: `
    <div class="container">
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