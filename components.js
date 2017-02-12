let app;
app = new Vue({
  el: `#app`,
  data: {
    message: 'Hello Vue.js!'
  }
});

let app2;
app2 = new Vue({
  el: `#app-2`,
  data: {
    message: 'You load this page at: ' + new Date()
  }
});

let app3;
app3 = new Vue({
  el: `#app-3`,
  data: {
    seen: true
  }
});

let app4;
app4 = new Vue({
  el: `#app-4`,
  data: {
	  todos: [
      { text: 'Read about Vue.js'},
      { text: 'Wash dishes'},
      { text: 'Read about Vue.js again'}
    ]
  }
});

let app5;
app5 = new Vue({
  el: `#app-5`,
  data: {
    message: 'Reverse letters'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

let app6;
app6 = new Vue({
  el: `#app-6`,
  data: {
    word: ''
  },
  computed: {
    url: function () {
      return 'http://www.pin1yin1.com/#' + this.word
    }
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

let app7;
app7 = new Vue({
  el: `#app-7`,
  data: {
    groceryList: [
      { text: 'vegetables'},
      { text: 'cheese'},
      { text: 'What a fuck!'}
    ]
  }
});

let app8;
app8 = new Vue({
  el: `#app-8`,
  data: {
    message: 'Hello!'
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
});

let watchExample;
watchExample = new Vue({
  el: `#watch-example`,
  data: {
    question: '',
    answer: 'Until you don\'t ask nothing'
  },
  watch: {
    question: function (newQuestion) {
      this.answer = 'Waiting'
      this.getAnswer()
    }
  },
  methods: {
    getAnswer: _.debounce(
      function () {
	      if (this.question.indexOf('?') === -1) {
		      this.answer = 'Usualy a question end with "?"'
		      return
	      }
	      this.answer = 'Think'
	      let vm = this
	      axios.get('https://yesno.wtf/api')
		      .then(function (response) {
			      vm.answer = _.capitalize(response.data.answer)
		      })
		      .catch(function (error) {
			      vm.answer = 'Error! Can\'t connect with API' + error
		      })
      },
      500
    )
  }
});

new Vue({
  el: `#app-9`,
  data: {
    parentMsg: ''
  },
  components: {
    child: {
      props: ['myMessage'],
      template: `<span>{{myMessage}}</span>`
    }
  }
});

new Vue({
	data: function () {
		return { hi: 'V' }
	},
	components: {
	  component: {
		  props: ['hi'],
      template: '<span>{{hi}}</span>'
		}
  }
});

Vue.component('currency-input', {
	template: `
		<div>
			<label v-if="label">{{ label }}</label>
			$
			<input
				ref="input"
				v-bind:value="value"
				v-on:input="updateValue($event.target.value)"
				v-on:focus="selectAll"
				v-on:blur="formatValue"
			>
		</div>
	`,
	props: {
		value: {
			type: Number,
			default: 0
		},
		label: {
			type: String,
			default: ''
		}
	},
	mounted: function () {
		this.formatValue()
	},
	methods: {
		updateValue: function (value) {
			var result = currencyValidator.parse(value, this.value);
			if (result.warning) {
				this.$refs.input.value = result.value
			}
			this.$emit('input', result.value)
		},
		formatValue: function () {
			this.$refs.input.value = currencyValidator.format(this.value)
		},
		selectAll: function (event) {
			setTimeout(function () {
				event.target.select()
			}, 0)
		}
	}
});

new Vue({
	el: '#app-11',
	data: {
		price: 0,
		shipping: 0,
		handling: 0,
		discount: 0
	},
	computed: {
		total: function () {
			return ((this.price * 100 + this.shipping * 100 + this.handling * 100 - this.discount * 100) / 100).toFixed(2)
		}
	}
});

Vue.directive('focus', {
	inserted: function (el) {
		el.focus()
	}
});
new Vue({
	el: `#focus`,
});

const NotFound = { template: `<p>Page not found</p>` }
const Home = { template: `<p>Main</p>` }
const About = { template: `<p>About us</p>` }

const routes = {
  `/`: Home,
  `/about`: About
}

new Vue({
  el: `#app-router`,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
});