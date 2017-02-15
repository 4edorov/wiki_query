Vue.component('random-search', {
  template: `
    <button v-on:click="randomSearch" type="button" class="btn btn-default"><i class="fa fa-random"></i> Random Search</button>
  `
});

let randomSearch = new Vue({
  el: '#randomSearch',
  methods: {
    randomSearch: function(event) {
      event.preventDefault();
      this.$http.get(
      {
        this.response = data;
      }).error(function (data, status, request) {

      });
    }
  }
});