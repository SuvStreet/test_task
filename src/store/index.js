import { createStore } from 'vuex'
import actions from './actions'

export default createStore({
  state: {
    conditions: [],
  },
  mutations: {
    longConditions(state, payload) {
      state.conditions = payload
    },
    addCondition(state, payload) {
      state.conditions.push(payload)
    },
    addDiapason(state, payload) {
      state.conditions
        .find((item) => item.id === payload)
        .info.counterDiapason.push({
          id: Math.random(),
          value: { ot: '18', do: '86' },
        })
    },
    addType(state, payload) {
      state.conditions
        .find((item) => item.id === payload)
        .type.counterType.push({ id: Math.random(), value: 'gold' })
    },
    addStatus(state, payload) {
      state.conditions
        .find((item) => item.id === payload)
        .status.counterStatus.push({ id: Math.random(), value: 'active' })
    },
    removeCondition(state, payload) {
      state.conditions = state.conditions.filter((item) => item.id !== payload)
    },
  },
  actions,
  getters: {
    getConditions(state) {
      return state.conditions
    },
    getChoiceCondition(_, getters) {
      return (id) => getters.getConditions.find((item) => item.id === id)
    },
  },
})
