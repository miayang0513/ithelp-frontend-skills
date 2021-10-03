import { createStore } from 'vuex'

const createVuexStore = (initialState) => {
  const state = Object.assign({
    count: 0
  }, initialState)

  return createStore({
    state,
    getters: {
      count: state => state.count
    },
    mutations: {
      increment (state) {
        state.count += 1
      }
    }
  })
}

export default createVuexStore()

export { createVuexStore }
