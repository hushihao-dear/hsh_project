import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
export default new vuex.Store({
  state: {
    title: '个人技能'
  },
  mutation: {
    changeTitle (state) {
      state.title = '经验'
    }
  },
  actions: {}
})
