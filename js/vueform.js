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
  el: '#randomSearch',
});