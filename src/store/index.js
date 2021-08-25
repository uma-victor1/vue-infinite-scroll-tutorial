
import { createStore } from 'vuex'

export default createStore({
  state: {
    quote: {},
    quotes: []
  },
  mutations: {
    GetRandomQuote (state) {
      fetch("https://jsonplaceholder.typicode.com/comments", {
        method: 'GET'
      })
        .then(res => res.json())
        .then(data => {
          if (state.quote._id != data._id) {
            state.quote = data;
          } else {
            console.log("Duplicate");
            this.commit('GetRandomQuote');
          }
        });
    },
    GetAllQuotes (state) {
        fetch("https://jsonplaceholder.typicode.com/comments", {
        method: 'GET'
      })
        .then(res => res.json())
        .then(data => {
          state.quotes = data;
        });
    }
  },
  getters: {
    GetSpecificQuote: state => id => {
      return state.quotes.filter(q => q._id == id)[0]
    }
  }
})