import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curArt: 'curtitle',
    COUNT: 0,
    IFSHOW: true,
    CURCOT: ''
  },
  mutations: {
    readmore (state, tit) {
      state.curArt = tit
    },
    increase (state) {
      state.COUNT++
    },
    navishow (state, tru) {
      state.IFSHOW = tru
    },
    setcot (state, cot) {
      state.CURCOT = cot
    }
  },
  actions: {
    readmore (context, tit) {
      context.commit('readmore', tit)
    },
    increase (context) {
      context.commit('increase')
    }
  },
  modules: {
  }
})
